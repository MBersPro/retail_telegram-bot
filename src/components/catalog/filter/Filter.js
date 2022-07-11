import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ setFilter }) => {
  const onSetFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
  };
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <button
            type="button"
            value="all"
            onClick={onSetFilter}
            className={styles.button}
          >
            Все
          </button>
        </li>
        <li className={styles.li}>
          <button
            type="button"
            value="clothes"
            onClick={onSetFilter}
            className={styles.button}
          >
            Одежда
          </button>
        </li>
        <li className={styles.li}>
          <button
            type="button"
            value="sneakers"
            onClick={onSetFilter}
            className={styles.button}
          >
            Обувь
          </button>
        </li>
        <li className={styles.li}>
          <button
            type="button"
            value="outerwear"
            onClick={onSetFilter}
            className={styles.button}
          >
            Верхняя одежда
          </button>
        </li>
        <li className={styles.li}>
          <button
            type="button"
            value="pants"
            onClick={onSetFilter}
            className={styles.button}
          >
            Джоггеры
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
