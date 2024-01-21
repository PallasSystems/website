import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  MissingPage,
  ServicesPage,
  ServicePageData,
  TeamPage,
  TeamBioPage,
  TeamBiosData,
} from "./pages";
import { FooterData, NavBarData } from "./App.data";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={""} element={<HomePage  footerProps={FooterData} navBarProps={NavBarData} />} />

        <Route
          path={ServicePageData.link}
          element={<ServicesPage footerProps={FooterData} navBarProps={NavBarData} serviceProps={ServicePageData} />}
        />
        { ServicePageData.items ? ServicePageData.items.map((service) => {
          return (
            <Route
              key={service.title}
              path={service.link}
              element={<ServicesPage footerProps={FooterData} navBarProps={NavBarData} serviceProps={service} />}
            />
          );
        }) : null }
        <Route path={"/team"} element={<TeamPage bios={TeamBiosData} footerProps={FooterData} navBarProps={NavBarData} />} />
        {TeamBiosData.map((bio) => {
          return (
            <Route
              key={bio.title}
              path={bio.link}
              element={<TeamBioPage footerProps={FooterData} navBarProps={NavBarData} {...bio} />}
            />
          );
        })}
        <Route path={"/404"} element={<MissingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
