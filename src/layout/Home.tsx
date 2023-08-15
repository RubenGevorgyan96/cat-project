import { useEffect, useState } from "react";
import { fetchCategories, fetchImages } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { SideBar } from "../components/sideBar/SideBar";
import { Images } from "../components/images/Images";
import "./home.css";
import { RemovePrevState } from "../redux/imagesSlice";

export const Home = () => {
  const { category } = useAppSelector((state) => state.categories);
  const { images } = useAppSelector((state) => state.images);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);
  const dispatch = useAppDispatch();

  const ChangeCategoryHandle = (name: number) => {
    setCategoryId(name);
    dispatch(RemovePrevState());
    dispatch(fetchImages({ pages: pages, category_id: name }));
  };

  const showMoreHandler = () => {
    setPages((pre) => pre + 1);
    dispatch(fetchImages({ pages: pages, category_id: categoryId }));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(
      fetchImages({
        pages,
        category_id: 1
      })
    );
  }, []);

  return (
    <div className="wrapper">
      {category && <SideBar categories={category} ChangeCategoryHandle={ChangeCategoryHandle} />}
      {images && <Images images={images} showMoreHandler={showMoreHandler} />}
    </div>
  );
};
