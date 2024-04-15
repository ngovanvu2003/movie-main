import React from "react";
import { Cast, Detail, Item, VideoTrailer } from "../../typings";
import Image from "next/image";
import { imageResize } from "@/api/constants";
interface Props {
  props: {
    data: Detail;
    casts: Cast[];
    similar: Item[];
    videos: VideoTrailer[];
  };
}
const Production = ({ data }: any) => {
  console.log(data.production_companies);
  return (
    <div className="px-6 md:px-20 ">
      <h1 className="text-lg py-2">Production Companies</h1>
      <div className="flex justify-center items-center text-center overflow-y-auto gap-20 lg:gap-10">
        {data.production_companies.map((item: any) => (
          <div className="" key={item.id}>
            {/* <div className="flex justify-center">
              <Image
                src={
                  !item.logo_path ? "/error.jpg" : imageResize(item.logo_path)
                }
                alt="cast"
                width={150}
                height={150}
                className="p-1  bg-white rounded-xl"
              />
            </div> */}
            <p className="text-[#DB9100]"> {item.name}</p>
            <p> {item.origin_country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Production;
