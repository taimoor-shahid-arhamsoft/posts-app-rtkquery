import { PhotosResponse } from "../Api/Interfaces";
import Image from "next/image";

const Photo: React.FC<PhotosResponse> = (props) => {
  const myLoader = ({ src }: { src: string }) => {
    return `https://via.placeholder.com/500x500?text=${encodeURIComponent(src)}`;
  };

  return (
    <div className="photo py-20 px-20 relative bg-postMainBG rounded-10 w-19 mb-45 mx-auto border border-post border-solid border-1">
      <div className="image">
        <Image
          loader={myLoader}
          src={props.url}
          width={280}
          height={280}
          alt={props.title}
          className="mx-auto mb-5"
        />
      </div>
      <h3 className="text-red post-title block max-w-full mx-auto overflow-hidden line-clamp-2 max-h-48 overflow-ellipsis uppercase font-bold">
        {props.title}
      </h3>
    </div>
  );
};

export default Photo;