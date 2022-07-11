import React from "react";
import styles from "./ProductsList.module.css";
import Product from "./product/Product";

const ProductsList = ({
  products,
  addToKorzina,
  korzina,
  added,
  modalChanger,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {products.map((product) => (
          <li className={styles.li} key={product.id}>
            <Product
              product={product}
              addToKorzina={addToKorzina}
              korzina={korzina}
              added={added}
              modalChanger={modalChanger}
              products={products}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
