import React from "react";
import "./sidebar.css";
import { Categories } from "../../interfaces/categories.interface";

export interface SideBarInterface {
  categories: Categories[];
  ChangeCategoryHandle: (id: number) => void;
}

export const SideBar = ({
  categories,
  ChangeCategoryHandle
}: SideBarInterface) => {
  console.log(categories);
  return (
    <div className="sidebar">
      {categories.map((el) => (
        <React.Fragment key={Math.random()}>
          <button onClick={() => ChangeCategoryHandle(el.id)}>{el.name}</button>
        </React.Fragment>
      ))}
    </div>
  );
};
