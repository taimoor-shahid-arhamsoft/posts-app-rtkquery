"use client";
import { useState, useEffect, useRef } from "react";
import Post from "@/components/post/Post";
import PageLoader from "@/components/loader/PageLoader";
import { postType } from "@/components/Api/Interfaces";
import { useGetPostsQuery } from "@/components/Api/Posts/PostsExtendedApi";
import ExitModal from "@/components/ExitModal/ExitModal";
import AddModal from "@/components/AddPostModal/AddPostModal";

export default function Posts() {
  const [posts, setPosts] = useState<postType[]>([]);
  const [limit, setLimit] = useState<number>(15);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [moreLoading, setMoreLoading] = useState<boolean>(false);
  const postsLimit = posts.slice(0, limit);
  const { data, isLoading } = useGetPostsQuery(null);
  const [delLOader, setDelLOader] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  useEffect(() => {
    if (posts.length > 0) {
      scrollToBottom();
    }
  }, [posts]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadMoreButton = async () => {
    setMoreLoading(true);
    try {
      setLimit((limit) => limit + 15);
    } catch (error) {
      console.error("Problem with loading more data:", error);
    } finally {
      setMoreLoading(false);
    }
  };

  const loadLessButton = async () => {
    setLimit(15);
  };

  return (
    <>
      {moreLoading || isLoading || delLOader ? (
        <PageLoader />
      ) : (
        <div className="post-page px-24 py-14">
          <ExitModal />
          <div className="head mb-80 flex items-center justify-center">
            <h1 className="text-red text-center text-40">POSTS</h1>
            <AddModal />
          </div>
          <div className="flex min-h-screen flex-wrap mb-40">
            {postsLimit?.map((post, index) => {
              return <Post key={index} {...post} setDelLOader={setDelLOader} />;
            })}
          </div>
          <div className="load-more-button text-center" ref={bottomRef}>
            {postsLimit.length !== posts.length ? (
              <button
                className="text-20 text-red bg-id py-3 px-8 rounded-5 inline-block text-20 font-bold"
                onClick={loadMoreButton}
              >
                LOAD MORE
              </button>
            ) : (
              <button
                className="text-20 text-red bg-id py-3 px-8 rounded-5 inline-block text-20 font-bold"
                onClick={loadLessButton}
              >
                SHOW LESS
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
