import React from 'react'

const PostList = ({ post, index }) => (
  <div className="p-4 border rounded-lg shadow-md bg-white mb-4">
    <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
    <p className="text-gray-600 mt-2">{post.content}</p>
    <p className="text-sm text-gray-400 mt-1">Date: {post.date}</p>
    <p className="text-sm text-gray-400">Slug: {post.slug}</p>
    <p className="text-sm text-gray-400">Index: {index}</p>
  </div>
);

export default PostList