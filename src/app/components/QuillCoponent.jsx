"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const Quill = ({ value, setValue }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};
export default Quill;
