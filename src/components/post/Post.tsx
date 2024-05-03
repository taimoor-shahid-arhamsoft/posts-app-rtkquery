import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditModal from "../EditPostModal/EditPostModal";
import { postType } from "../Api/Interfaces";
import { useDeletePostMutation } from "../Api/Posts/PostsExtendedApi";

const Post: React.FC<postType & { setDelLOader: (value: boolean) => void }> = (props) => {
  const [deletePost] = useDeletePostMutation();
  const { setDelLOader } = props;

  const deleteSinglePost = async () => {
    setDelLOader(true);
    try {
      const response = await deletePost(props.id);
      if ("data" in response) {
        console.log("Post Deleted successfully:", response.data);
      } else if ("error" in response) {
        console.error("Error deleting post:");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setDelLOader(false);
    }
  };

  return (
    <div className="post pt-50 pb-20 px-20 relative bg-postMainBG rounded-10 w-19 mb-45 mx-auto border border-post border-solid border-1">
      <h2 className="text-red bg-id absolute w-60 h-60 rounded-half flex items-center justify-center text-20 font-bold top-[-30px] left-1/2 transform -translate-x-1/2">
        {props.id}
      </h2>
      <Link
        href={`/posts/detail-page?id=${props.id}`}
        className="text-red post-title block max-w-full mx-auto overflow-hidden line-clamp-2 max-h-48 overflow-ellipsis mb-2 uppercase font-bold"
      >
        {props.title}
      </Link>
      <p className="text-id post-body h-140 overflow-x-hidden overflow-y-auto">
        {props.body}
      </p>
      <EditModal body={props.body} title={props.title} />
      <button
        onClick={deleteSinglePost}
        className="text-red bg-id absolute w-30 h-30 rounded-half flex items-center justify-center text-14 font-bold top-[0px] right-1/3 transform translate-x-1/2 -translate-y-1/2"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Post;
