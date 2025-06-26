import React from "react";
import PostCard from "./PostCard";

const PostList = ({ posts, onRemove }) => (
  <div className="flex flex-wrap gap-6 justify-center">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} onRemove={onRemove} />
    ))}
  </div>
);

export default PostList;