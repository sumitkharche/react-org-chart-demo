import logo from "./logo.svg";
import "./App.css";
import CardComponent from "./CardComponent";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "@emotion/styled";
import OrgChart from "./OrgChart";
import { useEffect, useState } from "react";
import axios from 'axios'

const StyledNode = styled.div`
  display: inline-block;
`;

function App() {
  const [posts, setPosts] = useState(null)

const fetchPosts = () =>{
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((resp)=>{
    console.log(resp.data);
    setPosts(resp.data)
  })
}

useEffect(() => {
  fetchPosts()
}, [])
  return (
    <div className="App">
      <OrgChart />
      {
        posts!=null ?
        (
        <div>
          <p>{posts.id}</p>
          <p>{posts.title}</p>
        </div>)
        :
        <div>
          <p>Loading....</p>
        </div>
        
      }
      
    </div>
  );
}

export default App;
