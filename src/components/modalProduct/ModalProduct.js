import React, { useEffect } from "react";
import styles from "./ModalProduct.module.css";
import { ReactComponent as CloseBtn } from "./svg/close.svg";
import { ReactComponent as Left } from "./svg/left.svg";
import { ReactComponent as Right } from "./svg/right.svg";

const ModalProduct = ({
  modalImages,
  currentImageIndex,
  rotationRight,
  rotationLeft,
  modalClose,
  modalClickClose,
}) => {
  useEffect(() => {
    window.addEventListener("keydown", modalClose);
    return () => {
      window.removeEventListener("keydown", modalClose);
    };
  });

  const onRotationRight = () => {
    rotationRight();
  };

  const onRotationLeft = () => {
    rotationLeft();
  };

  const onModalClose = (e) => {
    modalClickClose();
  };

  return (
    <div id="12" className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.l} onClick={onRotationLeft}>
          <Left className={styles.left} />
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.img}
            src={modalImages[currentImageIndex]}
            alt="some"
          />
        </div>
        <div className={styles.r} onClick={onRotationRight}>
          <Right className={styles.right} />
        </div>
        <button className={styles.close} onClick={onModalClose}>
          <CloseBtn className={styles.svgClose} />
        </button>
      </div>
    </div>
  );
};

export default ModalProduct;
