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

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={""} element={<HomePage />} />

        <Route
          path={ServicePageData.link}
          element={<ServicesPage serviceProps={ServicePageData} />}
        />
        {ServicePageData.items.map((service) => {
          return (
            <Route
              key={service.title}
              path={service.link}
              element={<ServicesPage serviceProps={service} />}
            />
          );
        })}

        <Route path={"/team"} element={<TeamPage bios={TeamBiosData} />} />
        {TeamBiosData.map((bio) => {
          return (
            <Route
              key={bio.title}
              path={bio.link}
              element={<TeamBioPage {...bio} />}
            />
          );
        })}
        <Route path={"/404"} element={<MissingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
