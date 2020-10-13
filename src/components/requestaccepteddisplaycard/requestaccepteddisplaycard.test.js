import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RequestAcceptedDisplayCard from './RequestAcceptedDisplayCard';

describe('RequestAcceptedDisplayCard component', () => {


    test(`Given the require props,
            When the component is rendered,
            Then it should render a charity name`, () => {
        const testName = 'Test Charity';
        const testDescription = 'Test description';

        const props = {
            cardData: [{
                requestId: 1,
                charityName: testName,
                description: testDescription,
                amount: "1500",
                duration: "2",
                status: "ACCEPTED"
            }]
        }
        const { getByText } = render(
            <MemoryRouter>
                <RequestAcceptedDisplayCard {...props} />
            </MemoryRouter>
        );
        expect(getByText(testName)).toBeTruthy();
        expect(getByText(testDescription)).toBeTruthy();
        expect(getByText('Amount: £1500')).toBeTruthy();
        expect(getByText("Duration: 2 years")).toBeTruthy();
    })

    test(`Given the require props,
    When the component is rendered,
    Then it should render a link`, () => {
        const testName = 'Test Charity';
        const testDescription = 'Test description';

        const props = {
            cardData: [{
                requestId: 13,
                charityName: testName,
                description: testDescription,
                amount: "£1500",
                duration: "2 years",
                status: "ACCEPTED"
            }]
        }

        const { getByText } = render(
            <MemoryRouter>
                <RequestAcceptedDisplayCard {...props} />
            </MemoryRouter>
        );
        expect(getByText(testName).closest('a')).toHaveAttribute('href', '/ForSponsorsAccepted/1');
    })




})