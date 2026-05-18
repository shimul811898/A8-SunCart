import Image from "next/image";
import React from "react";

const Card = ({ photo }) => {
  return (
    <div className="rounded-lg  shadow-md">
      <Image
        src={photo.image}
        alt="card image"
        width={400}
        height={300}
        className="object-cover"
      />
    </div>
  );
};

export default Card;