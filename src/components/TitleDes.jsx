import React from "react";

function TitleDes({ title, des }) {
  return (
    <div className="flex flex-col gap-3">
      <p>{title}</p>
      <p>{des}</p>
    </div>
  );
}

export default TitleDes;
