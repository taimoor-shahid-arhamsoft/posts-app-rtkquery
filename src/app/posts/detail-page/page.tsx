"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import commentImage from "../../../Assets/Images/placeholder.jpg";
import { useSearchParams } from "next/navigation";
import { postType, commentType } from "@/components/Api/Interfaces";
import PageLoader from "@/components/loader/PageLoader";
import { useGetSinglePostQuery } from "@/components/Api/Posts/PostsExtendedApi";
import { useGetCommentsQuery } from "@/components/Api/Comments/CommentsExtendedApi";

export default function DetailPage() {
  const [detail, setDetail] = useState<postType | null>(null);
  const [comments, setComments] = useState<commentType[]>([]);
  const searchParams = useSearchParams();
  const params = searchParams.get("id");
  const postId = params ? parseInt(params) : null;
  const { data: postDetailData, isLoading: postDetailLoading } = useGetSinglePostQuery(postId!);
  const { data: commentData, isLoading: commentsLoading } = useGetCommentsQuery(postId!);

  useEffect(() => {
    if (postDetailData) {
      setDetail(postDetailData);
    }
    if (commentData) {
      setComments(commentData);
    }
  }, [postDetailData, commentData]);

  const addComment = async () => {};

  return (
    <>
      {postDetailLoading || commentsLoading ? (
        <PageLoader />
      ) : (
        <div className="detail-page px-24 py-14">
          <Link
            href="/posts"
            className="mb-20 text-red bg-id py-3 px-8 rounded-5 inline-block text-20 font-bold"
          >
            BACK
          </Link>
          <div className="py-30 px-20 bg-postMainBG rounded-10 mb-20 mx-auto border border-post border-solid border-1 max-w-70">
            {detail ? (
              <>
                <h1 className="text-red bg-id w-60 h-60 rounded-half flex items-center justify-center text-20 font-bold mb-6">
                  {detail && detail.id}
                </h1>
                <h3 className="text-red mb-3">{detail && detail.title}</h3>
                <p className="text-id">{detail && detail.body}</p>
              </>
            ) : (
              <PageLoader />
            )}
          </div>
          <div className="comments-section max-w-70 mx-auto">
            <div className="head mb-20">
              <h1 className="text-red text-center text-40">COMMENTS</h1>
            </div>
            <div className="comments-area">
              <div className="container">
                <div className="row justify-content-center mb-4">
                  <div className="col-lg-8">
                    {comments && (
                      <h1 className="text-id text-26">
                        {comments.length} Comments
                      </h1>
                    )}
                  </div>
                </div>
                {comments.map((comment, index) => {
                  return (
                    <div
                      className="flex p-5 bg-comment rounded-5 mb-6"
                      key={index}
                    >
                      <div className="flex-shrink-0 me-4">
                        <div className="avatar avatar-sm rounded-circle overflow-hidden rounded">
                          <Image
                            className="avatar-img"
                            width="50"
                            height="50"
                            src={commentImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-1">
                        <div className="comment-meta d-flex">
                          <h6 className="font-bold text-black text-20">
                            {comment.name}
                          </h6>
                        </div>
                        <div className="comment-body text-id">
                          {comment.body}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="form-input">
                  <form onSubmit={addComment}>
                    <div className="pb-4">
                      <input
                        className="appearance-none border-none focus:shadow-none rounded w-full py-2 px-3 text-red bg-id leading-tight focus:outline-none mb-3"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                      />
                      <textarea
                        className="appearance-none border-none focus:shadow-none rounded w-full py-2 px-3 text-red bg-id leading-tight focus:outline-none h-150"
                        id="comment"
                        name="comment"
                        placeholder="Enter Comment here ..."
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="py-2 px-4 text-red bg-id rounded font-bold transition duration-500 inline-block"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
