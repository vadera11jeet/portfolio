import React from "react";

const Chip = (props: { title: string }) => {
  return (
    <div className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded m-2">
      {props.title}
    </div>
  );
};

export default Chip;
