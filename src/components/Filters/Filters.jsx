import React from "react";
import styles from "./filters.module.css";

const Filters = (props) => {
  return (
    <div className={styles.filters}>
      <div className={styles.filterItem}>
        <div className={styles.filterItemTitle}>Количество пересадок</div>
        <div className={styles.filterItemList}>
          {props.filters.map((item) => (
            <div
              key={item.id}
              className={styles.filterItemElement}
              /* onClick={(e) => props.handleClick(e, item)} */
            >
              <div className={styles.filterItemValue}>
                <label className={styles.checkboxContainer}>
                  {item.text}
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    /* onChange={(e) => props.handleClick(e, item)} */
                  />
                  <span className={styles.checkmark}></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
