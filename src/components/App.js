import React, { useState, useEffect } from "react";
import Basket from "./basket/Basket";
import Catalog from "./catalog/Catalog";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import { data } from "./../data/data";
import ModalProduct from "./modalProduct/ModalProduct";

const tele = window.Telegram.WebApp;

const App = () => {
  const [korzina, setKorzina] = useState([]);
  const [products, setProducts] = useState([...data]);
  const [added, setAdded] = useState([]);
  const [modalImages, setModalImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    tele.ready()
  })

  const modalChanger = (products) => {
    setModalImages(products);
  };
  const addToKorzina = (id, color) => {
    setKorzina((prev) => [
      ...prev,
      { ...products.find((product) => product.id === id), color: color },
    ]);
    setAdded((prev) => [...prev, { id, color }]);
  };

  const setFilter = (value) => {
    if (value === "all") {
      setProducts([...data]);
    } else {
      setProducts([...data.filter((product) => product.type === value)]);
    }
  };

  const deleteFromKorzina = (id, color) => {
    setKorzina((prev) => [
      ...prev.filter(
        (product) => (product.id === id && product.color === color) !== true
      ),
    ]);
    setAdded((prev) => [
      ...prev.filter(
        (item) => (item.id === id && item.color === color) !== true
      ),
    ]);
  };

  const rotationRight = () => {
    const imgNumberLenght = modalImages.length;
    if (currentImageIndex + 1 >= imgNumberLenght) {
      return setCurrentImageIndex(0);
    }
    setCurrentImageIndex((prev) => prev + 1);
  };

  const rotationLeft = () => {
    const imgNumberLenght = modalImages.length;
    if (currentImageIndex <= 0) {
      return setCurrentImageIndex(imgNumberLenght - 1);
    }
    setCurrentImageIndex((prev) => prev - 1);
  };

  const modalClose = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    setModalImages(null);
  };

  const modalClickClose = () => {
    setModalImages(null);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Catalog
              addToKorzina={addToKorzina}
              products={products}
              korzina={korzina}
              added={added}
              modalChanger={modalChanger}
              setFilter={setFilter}
            />
          }
        ></Route>
        <Route
          path="/basket"
          element={
            <Basket korzina={korzina} deleteFromKorzina={deleteFromKorzina} />
          }
        ></Route>
      </Routes>
      {modalImages && (
        <ModalProduct
          modalImages={modalImages}
          currentImageIndex={currentImageIndex}
          rotationRight={rotationRight}
          rotationLeft={rotationLeft}
          modalClose={modalClose}
          modalClickClose={modalClickClose}
          products={products}
        />
      )}
    </>
  );
};

export default App;
