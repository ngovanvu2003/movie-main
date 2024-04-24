"use client";

import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className="fixed top-0 h-full bg-[#141414]  flex items-center justify-center">
      <BounceLoader color="#EF4444" size={40} />
    </Box>
  );
};

export default Loading;
