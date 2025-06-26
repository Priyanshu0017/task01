import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, removePost, setPage } from "./features/posts/postsSlice";
import Loading from "./components/Loading";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

const App = () => {
  const dispatch = useDispatch();
  const { posts, loading, currentPage, postsPerPage, removedIds } = useSelector(
    (state) => state.posts
  );
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 5000);
    dispatch(fetchPosts());
    return () => clearTimeout(timer);
  }, [dispatch]);


  const filteredPosts = posts.filter((post) => !removedIds.includes(post.id));


  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Remove post and shift new one from next page if available
  const handleRemove = (id) => {
    dispatch(removePost(id));

    const remaining = currentPosts.length - 1;
    if (remaining < postsPerPage && startIndex + postsPerPage < filteredPosts.length) {

    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setPage(page));
    }
  };

  if (showLoading || loading) return <Loading />;

  return (
    <div className="min-h-screen bg-blue-100 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Posts List</h1>
        <PostList posts={currentPosts} onRemove={handleRemove} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default App