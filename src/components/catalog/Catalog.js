import React from "react";
import styles from "./Catalog.module.css";
import ProductList from "./productsList/ProductsList";
import Filter from "./filter/Filter";

const Catalog = ({
  addToKorzina,
  products,
  korzina,
  added,
  modalChanger,
  setFilter,
}) => {
  return (
    <main className={styles.container}>
      <Filter setFilter={setFilter} />
      <ProductList
        products={products}
        addToKorzina={addToKorzina}
        korzina={korzina}
        added={added}
        modalChanger={modalChanger}
      />
    </main>
  );
};

export default Catalog;
