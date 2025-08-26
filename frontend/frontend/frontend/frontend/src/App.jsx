import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

// Pages
import Header from "./components/Header/header";
import Home from "./Page/Home/Home";
import YourProfile from "./components/YourProfile/YourProfile";
import MyOrder from "./components/MyOrder/MyOrder";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Contact from "./components/Contact/Contact";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import GiftStore from "./Page/GiftStore/GiftStore";
import PersonalizedJewelry from "./Page/PersonalizedJewelry/PersonalizedJewelry";
import LatestCollection from "./Page/LatestCollection/LatestCollection";
import AuthPage from "./Page/AuthPage/AuthPage";
import MoreInform from "./Page/MoreInform/MoreInform";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RingPage from "./Page/Ring/RingPage";
import CartPage from "./Page/CartPage/CartPage";
import OrderConfirmPage from "./Page/OrderConfirmPage/OrderConfirmPage";
import  { Toaster } from "react-hot-toast";
import EARRINGSPage from "./Page/EARRINGS/EARRINGSPage";
import BRACELETPage from "./Page/BRACELET/BRACELETPage";
import NECKLACEPage from "./Page/NECKLACE/NECKLACEPage";
import Pendantset from "./Page/Pendantset/Pendantset";
import WishlistPage from "./Page/WishlistPage/WishlistPage";



const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        {/* Common Components */}
        <TopBar />
        <Header />
        <Toaster position="top-center" reverseOrder={false} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<YourProfile />} />
          <Route path="/MyOrder" element={<MyOrder />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/terms" element={<TermsAndConditions/>} />
          <Route path="/giftstore" element={<GiftStore />} />
          <Route path="/personalized" element={<PersonalizedJewelry />} />
          <Route path="/collections" element={<LatestCollection />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/moreInform" element={<MoreInform />} />
          <Route path="/rings" element={<RingPage />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/orderConfirmation" element={<OrderConfirmPage />} />
          <Route path="/earrings" element={<EARRINGSPage/>} />
          <Route path="/bracelet" element={<BRACELETPage/>} />
          <Route path="/necklace" element={<NECKLACEPage/>} />
          <Route path="/pendantset" element={<Pendantset/>} />
          <Route path="/Wishlist" element={<WishlistPage/>}/>


        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
