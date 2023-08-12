import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Main from "./layouts/Main";
import Team from "./pages/Team";
import Tokens from "./pages/Tokens";
import NFTs from "./pages/NFTs";
import TermsOfUse from "./pages/TermsOfUse";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DoC from "./pages/DoC";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route exact path="/nfts" element={<NFTs />} />
          <Route path="/nfts/:category/:name" element={<NFTs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route
            path="/community-guidelines"
            element={<CommunityGuidelines />}
          />
          <Route path="/dawn-of-crypton" element={<DoC />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
