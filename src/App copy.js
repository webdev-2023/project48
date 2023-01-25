/*Requirement Statement: Use React to create a website for a fictitious clothing brand.
  ● Edit your existing App.js file so that it displays the header component, 
    the landing page component and at least three product components. 
    Use an array of values and props to do this. Pass props to the header component to specify whether the user is logged in or not.
  ● Make sure that your application is attractively styled. Use any custom CSS and/or CSS libraries of your choice in this regard.

Image reference: https://www.shein.co.uk/Men-Denim-c-1973.html?ici=CCCSN=MenHomePage_ON=Banner_OI=1_CN=Category_TI=50001_aod=0_PS=HZ-5-4_ABT=0&adp=11258852&scici=MenHomePage~~ON_Banner,CN_Category,HZ_Denim,HI_hotZone5wbwjopnc~~5_4~~real_1973~~~~&srctype=homepage&userpath=-MenHomePage-Men-Denim&src_module=MenHomePage&src_identifier=on%3DBanner%60cn%3DCategory%60hz%3DDenim%60ps%3D5_4%60jc%3Dreal_1973&src_tab_page_id=page_home1672302936499

*/

import { useState } from 'react'
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import Products from "./components/Products"
import Footer from "./components/Footer"
import prodImg1 from './images/prodImg1.png'
import prodImg2 from './images/prodImg2.png'
import prodImg3 from './images/prodImg3.png'
import prodImg4 from './images/prodImg4.png'

const json = require('./product-catelog.json')                  // loading the product catelog json file - returns a json object
console.log(json);


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)             // using useState hook to track changes in the state of isLoggedIn property
  const userName = "Dave"
  const productList = []

  // Let the user sign-in by clicking the 'Sign In' button in the Header. It will display the welcome message.
  const userSignIn = () => {
    let ans = prompt("Do you want to Sign in?: Yes/No").toLowerCase()
    if (ans === 'yes') {
      setLoggedIn(true)                                         // changing the state of isLoggedIn to true
    }
  }

  return (
    <div className="App">
      <Header title="NC CLOTHING" isLoggedIn={isLoggedIn} name={userName} onClick={userSignIn} />
      <LandingPage />
      <Products products={productList} />
      <Footer />
    </div>
  );
}

export default App
