import React, { useState } from "react";
import "./images.css";
import { useAppDispatch } from "../../redux/hooks";
import { fetchImages } from "../../redux/actions";
import { Images as ImageInterface } from "../../interfaces/images.interface";

export interface Image {
  images: ImageInterface[];
  showMoreHandler: () => void;
}

export const Images = ({ images, showMoreHandler }: Image) => {
  return (
    <div className="content">
      <div className="contentItems">
        {images.map((el: any) => (
          <React.Fragment key={Math.random()}>
            <img src={el.url} alt="image" />
          </React.Fragment>
        ))}
      </div>
      <div className="seeMore">
        <button onClick={() => showMoreHandler()}>See More</button>
      </div>
    </div>
  );
};
