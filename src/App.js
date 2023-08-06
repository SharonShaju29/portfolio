import "./App.css";
import * as React from 'react'
import PersonalInfoBar from "./components/personalInfoBar";
import TabsViewSwitch from "./components/tabsViewSwitch";
import MainContentMobile from "./components/mainContentMobile";

function App() {
  return (
    <div className="App">
      <div className="content-cover">
        <PersonalInfoBar />
        <TabsViewSwitch />
        <MainContentMobile />
      </div>
    </div>
  );
}

export default App;
