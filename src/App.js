import logo from "./logo.svg";
import "./App.css";
import CardComponent from "./CardComponent";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "@emotion/styled";
import OrgChart from "./OrgChart";

const StyledNode = styled.div`
  display: inline-block;
`;

function App() {
  return (
    <div className="App">
      <OrgChart />
      
    </div>
  );
}

export default App;
