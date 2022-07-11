import React, {useState} from "react";
import styles from "./Product.module.css";

const Product = ({ product, addToKorzina, added, modalChanger }) => {
  const [color, setColor] = useState(Object.keys(product.image)[0]);
  const [colorPath, setColorPath] = useState(product.image[color]);
  const [description, setDescription] = useState(false);
  const onAddToKorzina = () => {
    const id = product.id;
    addToKorzina(id, color);
  };

  const onModalChanger = () => {
    modalChanger(colorPath);
  };

  const onImageChanger = (e) => {
    const color = e.target.id;
    setColorPath(product.image[color]);
    setColor(color);
  };
  const funcdOpen = () => {
    setDescription(true);
  };
  const funcdClose = () => {
    setDescription(false);
  };
  const OpenStyle = {
    transform: "scale(1)",
    transition: "0.6s",
  };
  const CloseStyle = {
    transform: "scale(0)",
    transition: "0.2s",
  };
  const styleValue = description ? OpenStyle : CloseStyle;
  return (
    <>
      <div className={styles.divImageAndTxt}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src={colorPath[0]}
            alt={product.name}
            onClick={onModalChanger}
          />
        </div>
        <div className={styles.productCharactersContainer}>
          <div className={styles.p_contrainer}>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price}₽</p>
            <div className={styles.colorsContainer}>
              {Object.keys(product.image).map((color) => (
                <div
                  id={color}
                  onClick={onImageChanger}
                  className={styles[color]}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.descriptionModal} style={styleValue}>
            <button
              onClick={funcdClose}
              className={styles.btnBackModalDescription}
            >
              Назад
            </button>
            <p className={styles.descriptionTxt}>{product.description}</p>
          </div>
          <div className={styles.btnOpenModalDescriptionContainer}>
            <button
              onClick={funcdOpen}
              className={styles.btnOpenModalDescription}
            >
              Описание
            </button>
          </div>
        </div>
      </div>
      <div className={styles.divBtn}>
        <button
          className={
            added.some((element) => {
              if (element.id === product.id && element.color === color) {
                return true;
              }
              return false;
            })
              ? styles.buttonAdded
              : styles.buttonNotAdded
          }
          disabled={added.some((element) => {
            if (element.id === product.id && element.color === color) {
              return true;
            }
            return false;
          })}
          type="button"
          id={product.id}
          onClick={onAddToKorzina}
        >
          {added.some((element) => {
            if (element.id === product.id && element.color === color) {
              return true;
            }
            return false;
          }) ? (
            <span>Добавлено</span>
          ) : (
            <span>Добавить в корзину</span>
          )}
        </button>
      </div>
    </>
  );
};

export default Product;
