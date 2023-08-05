import "./App.css";
import * as React from 'react'
import PersonalInfoBar from "./components/personalInfoBar";
import TabsViewSwitch from "./components/tabsViewSwitch";
import { useSearchParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="content-cover">
        <PersonalInfoBar />
        <TabsViewSwitch />
      </div>
    </div>
  );
}

export default App;
