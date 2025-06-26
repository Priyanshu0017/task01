import React from "react";

const PostCard = ({ post, onRemove }) => (
  <div className="relative bg-white rounded-lg shadow p-4 w-full max-w-xs">
    <button
      onClick={() => onRemove(post.id)}
      className="absolute top-2 right-2 text-2xl text-red-600 rounded-full w-7 h-7 flex items-center justify-center"
      aria-label="Remove"
    >
      &times;
    </button>
    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
    <p className="text-gray-700">{post.body}</p>
  </div>
);

export default PostCard;