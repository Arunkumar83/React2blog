import React from "react";
import Post from "./Post";

function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post, i) => (
        <Post {...post} key={"post-" + i} />
      ))}
    </div>
  );
}

export default PostList;
