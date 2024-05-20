import React, { FC } from "react";

type Props = {
  content: string;
};

const Overview: FC<Props> = ({ content }) => {
  return (
    <div className="flex justify-end items-center">
      <p className="text-sm font-light">{content}</p>
    </div>
  );
};

export default Overview;
