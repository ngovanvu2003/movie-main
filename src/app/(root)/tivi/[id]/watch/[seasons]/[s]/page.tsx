import { embedEpisode } from "@/api/constants";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div className="mt-20">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedEpisode(params.id, params.seasons, params.s)}
        title=""
        frameBorder="0"
        allowFullScreen
        loading="eager"
      ></iframe>
    </div>
  );
};

export default page;
