import React, { Component, useState } from 'react';
// import PPNavbar from './components/PPNavbar';
// import Sponsorlist from './components/Sponsorlist';
// import CharityPage from './components/CharityPage';
// import SponsorPage from './components/SponsorPage';
import Jumbotron from './components/jumbotron';

// function Main({SponsorData}) {
//   const [navitems, setitems] = useState([
//     { itemName: "For Charities", itemLink:"/CharityPage", itemAddr: "CharityPage",activePage: false },
//     { itemName: "For Sponsor", itemLink:"/SponsorPage", itemAddr: "SponsorPage",activePage: false}
    
//   ]);
//   const [showProfile,setshowProfile] = useState(false);
  
//   return (
//     <div className="Main">
//       <PPNavbar NavItems={navitems}  showProfile={showProfile}/>

//       <h2>There</h2>
//     </div>
//   );
// }

export default function Main() {
  return (
    <Jumbotron.Container>
      <Jumbotron.Title>Heloo</Jumbotron.Title>
      <Jumbotron.SubTitle>Heloo</Jumbotron.SubTitle>
    </Jumbotron.Container>
  )
}