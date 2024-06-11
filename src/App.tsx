import React from "react";
import { Layout } from "./components/index";
import {SearchBoxContextProvider,ActiveSideBarProvider} from "./contex/contex";
function App() {
  return (
    <ActiveSideBarProvider>
    <SearchBoxContextProvider>
      <Layout />
    </SearchBoxContextProvider>
    </ActiveSideBarProvider>
  );
}

export default App;
