"use client";
import { useState, useEffect, useRef } from "react";
import PageLoader from "@/components/loader/PageLoader";
import { PhotosResponse } from "@/components/Api/Interfaces";
import { useGetPhotosQuery } from "@/components/Api/Photos/PhotosExtendedApi";
import ExitModal from "@/components/ExitModal/ExitModal";
import Photo from "@/components/photo/Photo";

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<PhotosResponse[]>([]);
  const [limit, setLimit] = useState<number>(15);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [moreLoading, setMoreLoading] = useState<boolean>(false);
  const photosLimit = photos.slice(0, limit);
  const { data, isLoading } = useGetPhotosQuery(null);

  useEffect(() => {
    if (data) {
      setPhotos(data);
    }
  }, [data]);

  useEffect(() => {
    if (photos.length > 0) {
      scrollToBottom();
    }
  }, [photos]);

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
      {moreLoading || isLoading ? (
        <PageLoader />
      ) : (
        <div className="post-page px-24 py-14">
          <ExitModal />
          <div className="head mb-80 flex items-center justify-center">
            <h1 className="text-red text-center text-40">PHOTOS</h1>
          </div>
          <div className="flex flex-wrap mb-40">
             {photosLimit?.map((photo, index) => {
              return <Photo key={index} {...photo} />;
            })}
          </div>
          <div className="load-more-button text-center" ref={bottomRef}>
              <button
                className="text-20 text-red bg-id py-3 px-8 rounded-5 inline-block text-20 font-bold"
                onClick={loadMoreButton}
              >
                LOAD MORE
              </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Photos;
