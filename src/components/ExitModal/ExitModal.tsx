import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ExitModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="mb-20 text-red bg-id py-1 px-3 rounded-5 inline-block text-20 font-bold absolute top-[20px] right-[20px]"
          onClick={toggleModal}
        >
          <FontAwesomeIcon icon={faXmark} />
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
            <div className="px-4 py-30">
                 <h1 className="text-postMainBG text-center text-40">Do You Want To Exit?</h1>
            </div>
            <div className="px-4 py-3 text-right">
              <button
                type="button"
                className="py-2 px-4 bg-black text-red rounded font-bold mr-2"
                onClick={toggleModal}
              >
                <i className="fas fa-times"></i> Cancel
              </button>
              <Link
                type="button"
                className="py-2 px-4 text-red bg-id rounded font-bold transition duration-500 inline-block"
                href="/"
              >
                <i className="fas fa-plus"></i> Exit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExitModal;
