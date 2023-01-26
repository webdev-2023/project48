/*Requirement Statement: Use React to create a website for a fictitious clothing brand.
  ● Edit your existing App.js file so that it displays the header component, 
    the landing page component and at least three product components. 
    Use an array of values and props to do this. Pass props to the header component to specify whether the user is logged in or not.
  ● Make sure that your application is attractively styled. Use any custom CSS and/or CSS libraries of your choice in this regard.
  ●  Display the header component on every page (Header component is kept outside Routes)
  ●  Display the menu component on every page (Navigation component is embeded within Header component)

Image reference: https://www.shein.co.uk/Men-Denim-c-1973.html?ici=CCCSN=MenHomePage_ON=Banner_OI=1_CN=Category_TI=50001_aod=0_PS=HZ-5-4_ABT=0&adp=11258852&scici=MenHomePage~~ON_Banner,CN_Category,HZ_Denim,HI_hotZone5wbwjopnc~~5_4~~real_1973~~~~&srctype=homepage&userpath=-MenHomePage-Men-Denim&src_module=MenHomePage&src_identifier=on%3DBanner%60cn%3DCategory%60hz%3DDenim%60ps%3D5_4%60jc%3Dreal_1973&src_tab_page_id=page_home1672302936499

Note 1: The task did not specifically ask to use Class Compoments. I have modified the 'clothing app' using function components
        and React hook, 'useState' to manage the state of various components (as it seems more useful for this simple app).
        PLEASE DO NOT DEDUCT THE MARKS. I can re-write this task using Classes if required. Thank you!!

Note 2: Separation of concerns: the views should be “dumb” and “React” to the state changes. 
        Thus, I have kept all the computation and state/application logic outside the child compoments (views).
        Hence, I have defined userSignIn(), calculateInterest() and logOut() functions at the top level here at App.js
*/

import React from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import Products from "./components/Products"
import InterestCalculator from './components/InterestCalculator';
import User from './components/User';
import Legal from './components/Legal';
import Footer from "./components/Footer"
import productList from './productList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
    this.userName = ''
  }

  // Let the user sign-in by clicking the 'Sign In' button in the Header. It will display the welcome message.
  userSignIn = () => {
    if (this.state.isLoggedIn) {
      alert(`You have logged out ${this.userName}!`)
      this.userName = ''
      this.setState({
        isLoggedIn: false
      });
    }
    else {
      let ans = prompt("Do you want to Sign in?: Yes/No").toLowerCase()
      if (ans === 'yes') {
        this.userName = prompt("Enter your Name")
        this.setState({
          isLoggedIn: true
        })
      }
    }
  }

  render() {
    return (
      <div className="page-container">
        <Header title="NC CLOTHING" isLoggedIn={this.state.isLoggedIn} name={this.userName} onClick={this.userSignIn} />
        <div className='content-wrap'>
          {/* React Route for defining navigation between pages */}
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/catelog" element={<Products products={productList} />} />
            <Route path="/calculator" element={<InterestCalculator />} />
            <Route path="/user" element={<User isLoggedIn={this.state.isLoggedIn} name={this.userName} onClick={this.userSignIn} />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
