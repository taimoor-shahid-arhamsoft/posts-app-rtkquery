import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { postTypeModal } from "../Api/Interfaces";
import { useEditPostMutation } from "../Api/Posts/PostsExtendedApi";

const EditModal: React.FC<postTypeModal> = ({ title, body }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [editPost] = useEditPostMutation();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const EditPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title: { value: string };
      body: { value: string };
    };
    setSubmitting(true);
    try {
      const response = await editPost({
        title: target.title.value,
        body: target.body.value,
        userId: 1,
      });
      if ("data" in response) {
        console.log("Post Edited successfully:", response.data);
        toggleModal();
      } else if ("error" in response) {
        console.error("Error editing post:");
      }
    } catch (error) {
      console.error("Error editing post:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center ms-10">
        <button
          className="text-red bg-id absolute w-30 h-30 rounded-half flex items-center justify-center text-14 font-bold top-[0px] left-1/3 transform -translate-x-1/2 -translate-y-1/2"
          onClick={toggleModal}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
      <div
        className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-dark opacity-90" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-red rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <form onSubmit={EditPost}>
              <div className="px-4 pt-10 pb-30">
                <h1 className="text-postMainBG text-center text-40">
                  Edit Post
                </h1>
              </div>
              <div className="px-4 pb-30">
                <input
                  className="appearance-none border-none focus:shadow-none rounded w-full py-2 px-3 text-red bg-id leading-tight focus:outline-none mb-3"
                  id="title"
                  name="title"
                  type="text"
                  defaultValue={title}
                />
                <textarea
                  className="appearance-none border-none focus:shadow-none rounded w-full py-2 px-3 text-red bg-id leading-tight focus:outline-none h-150"
                  id="body"
                  name="body"
                  defaultValue={body}
                />
              </div>
              <div className="px-4 py-3 text-right flex items-center justify-end">
                <button
                  type="button"
                  className="py-2 px-4 bg-black text-red rounded font-bold mr-2"
                  onClick={toggleModal}
                >
                  <FontAwesomeIcon icon={faXmark} />{" "}
                  <span className="ms-2">Cancel</span>
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 text-red bg-id rounded font-bold transition duration-500 inline-block"
                  disabled={submitting}
                >
                  {submitting ? (
                    <div className="loader" id="loader">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faEdit} />{" "}
                      <span className="ms-2">Edit Post</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
