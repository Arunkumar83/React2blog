import React from "react";
import ReactDOM from "react-dom";
import Login from "./user/Login";
import Logout from "./user/Logout";
import Register from "./user/Register";
import UserBar from "./user/UserBar";
import Post from "./post/Post";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import ReducerApp from "./exp/Reducers";
import LoginControl from "./learn/Learn";
import MessageApp from "./learn/State";
import StateFetchData from "./learn/StateWithAxios";

import "./styles.css";

const user = "Arun";
const posts = [
  { title: "sample title", content: "sample content1", author: "Arun" },
  { title: "sample title", content: "sample content2", author: "Arun" }
];

function App() {
  //return <UserBar />;
  //return <PostList posts={posts} />;
  //return <CreatePost />;
  //return <ReducerApp />;
  //  return <Greeting isLoggedIn={true} />;
  //  return <LoginControl />;
  //return <MessageApp />;
  return <StateFetchData />;
  /*return (
    <div>
      <UserBar />
      <br />
      <CreatePost user={user} />
      <hr />
      <PostList posts={posts} />
    </div>
  );*/
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
