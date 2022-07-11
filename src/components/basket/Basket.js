import React, { useState } from "react";
import styles from "./Basket.module.css";
import BasketProduct from "./basketProduct/BasketProduct";
import axios from "axios";

const TOKEN = "5126952485:AAFLxZssUoxlWopkAgN8WA6pj9_cpb0sHPs";
const CHAT_ID = "5000617170";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const initialState = {
  name: "",
  comWay: "",
  number: "",
};

const Basket = ({ korzina, deleteFromKorzina }) => {
  const [formState, setFormState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessage = (e) => {
    e.preventDefault();
    let message = `Заявка от: ${
      formState.name
    }\nПредпочтительный способ связи: ${formState.comWay}\nНомер телефона: ${
      formState.number
    }\nЗаказал:\n${korzina.map(
      (product, index) =>
        `${index + 1}. ${product.name} Цвет:${product.color} Цена:${
          product.price
        }\n`
    )}`;
    setFormState({ ...initialState });
    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then(() => {
        alert("Заявка была успешно отправлена");
      });
  };
  return (
    <main className={styles.container}>
      <ul className={styles.ul}>
        {korzina.map((product) => (
          <li key={`${product.id}${product.color}`} className={styles.li}>
            <BasketProduct
              product={product}
              deleteFromKorzina={deleteFromKorzina}
            />
          </li>
        ))}
      </ul>
      <div>
        <div className={styles.korzina_orderingContainer}>
          <p className={styles.korzina_orderingTitle}>Оформление заказа</p>
          <form onSubmit={sendMessage} className={styles.korzina_orderingForm}>
            <div className={styles.korzina_orderingForm_inputContainer}>
              <p className={styles.korzina_orderingForm_inputName}>Имя</p>
              <input
                value={formState.name}
                onChange={onHandleChange}
                name="name"
                type="text"
                className={styles.korzina_orderingForm_input}
              />
            </div>
            <div className={styles.korzina_orderingForm_inputContainer}>
              <p className={styles.korzina_orderingForm_inputName}>
                Предпочтительный
                <br />
                способ связи
              </p>
              <div className={styles.korzina_orderingForm_radioInputsContainer}>
                <div
                  className={styles.korzina_orderingForm_radioInputContainer}
                >
                  <input
                    value="Telegram"
                    onChange={onHandleChange}
                    name="comWay"
                    type="radio"
                    className={styles.korzina_orderingForm_radioInput}
                  />
                  <label className={styles.korzina_orderingFormInputLabel}>
                    Telegram
                  </label>
                </div>
                <div
                  className={styles.korzina_orderingForm_radioInputContainer}
                >
                  <input
                    value="WhatsApp"
                    onChange={onHandleChange}
                    name="comWay"
                    type="radio"
                    className={styles.korzina_orderingForm_radioInput}
                  />
                  <label className={styles.korzina_orderingFormInputLabel}>
                    WhatsApp
                  </label>
                </div>
                <div
                  className={styles.korzina_orderingForm_radioInputContainer}
                >
                  <input
                    value="Звонок"
                    onChange={onHandleChange}
                    name="comWay"
                    type="radio"
                    className={styles.korzina_orderingForm_radioInput}
                  />
                  <label className={styles.korzina_orderingFormInputLabel}>
                    Звонок
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.korzina_orderingForm_inputContainer}>
              <p className={styles.korzina_orderingForm_inputName}>
                Номер телефона
              </p>
              <input
                value={formState.number}
                onChange={onHandleChange}
                name="number"
                type="text"
                className={styles.korzina_orderingForm_input}
              />
            </div>
            <div className={styles.korzina_orderingBtnContainer}>
              <button className={styles.korzina_orderingBtn} type="submit">
                Оформить заказ
              </button>
            </div>
          </form>
        </div>
        <p className={styles.korzina_instruction}>
          После оформления заказа
          <br />
          с вами свяжется менеджер
          <br />
          для уточнения всех деталей
        </p>
      </div>
    </main>
  );
};

export default Basket;
