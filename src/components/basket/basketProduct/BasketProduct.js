import React, { useState } from "react";
import styles from "./BasketProduct.module.css";

const BasketProduct = ({ product, deleteFromKorzina }) => {
  const [image, setImage] = useState(product.image[product.color]);

  const onDeleteFromKorzina = (e) => {
    deleteFromKorzina(product.id, product.color);
  };
  return (
    <>
      <div className={styles.divImageAndTxt}>
        <div className={styles.image_container}>
          <img className={styles.image} src={image[0]} alt={product.name} />
        </div>
        <div className={styles.korzinaCharactersContainer}>
          <div className={styles.p_contrainer}>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price}₽</p>
          </div>
        </div>
      </div>
      <div className={styles.divBtn}>
        <button
          className={styles.btnDel}
          type="button"
          id={product.id}
          onClick={onDeleteFromKorzina}
        >
          Удалить из корзины
        </button>
      </div>
    </>
  );
};

export default BasketProduct;
