import logo from "./logo.svg";
import "./App.css";
import CardComponent from "./CardComponent";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "@emotion/styled";

const StyledNode = styled.div`
  display: inline-block;
`;

function OrgChart() {
  return (
    <div className="App">
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={
          <StyledNode>
            <CardComponent name="QUEEN ELIZABETH II" color="error.main"/>
          </StyledNode>
        }
      >
        <TreeNode label={<StyledNode><CardComponent name="DIANA" post="Princess of Wales" color="grey.500"/></StyledNode>}>
          <TreeNode label={<StyledNode><CardComponent name="DIANA" post="Princess of Wales" color="grey.500"/></StyledNode>} />
          <TreeNode label={<StyledNode><CardComponent name="DIANA" post="Princess of Wales" color="error.main"/></StyledNode>} />
        </TreeNode>
        <TreeNode label={<StyledNode><CardComponent name="CHARLES" post="Prince of Wales" color="error.main"/></StyledNode>}>
          
        </TreeNode>
        <TreeNode label={<StyledNode><CardComponent name="ANNE" post="Princess Royal" color="grey.500"/></StyledNode>}>
          
        </TreeNode>
        <TreeNode label={<StyledNode><CardComponent name="PRINCE ANDREW" post="DUKE  of York" color="grey.500"/></StyledNode>}>
        </TreeNode>
        <TreeNode label={<StyledNode><CardComponent name="PRINCE EDWARD" post="Earl of York" color="grey.500"/></StyledNode>}>
        </TreeNode>
      </Tree>
    </div>
  );
}

export default OrgChart;
