import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/app-reducer";
import styles from "./filters.module.css";

const Filters = ({ filters }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;

    if (name === "-1") {
      return dispatch(
        setFilters({
          "-1": checked,
          "0": checked,
          "1": checked,
          "2": checked,
          "3": checked,
        })
      );
    }

    return dispatch(setFilters({ ...filters, [name]: checked }));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterItem}>
        <div className={styles.filterItemTitle}>Количество пересадок</div>
        <div className={styles.filterItemList}>
          <div className={styles.filterItemElement}>
            <div className={styles.filterItemValue}>
              <label className={styles.checkboxContainer}>
                Все
                <input
                  type="checkbox"
                  checked={filters["-1"]}
                  name="-1"
                  onChange={handleFilterChange}
                />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </div>

          <div
            className={styles.filterItemElement}
            /* onClick={(e) => handleClick(e, item)}  */
          >
            <div className={styles.filterItemValue}>
              <label className={styles.checkboxContainer}>
                Без пересадок
                <input
                  type="checkbox"
                  checked={filters["0"]}
                  name="0"
                  onChange={handleFilterChange}
                />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </div>

          <div
            className={styles.filterItemElement}
            /* onClick={(e) => handleClick(e, item)}  */
          >
            <div className={styles.filterItemValue}>
              <label className={styles.checkboxContainer}>
                1 пересадка
                <input
                  type="checkbox"
                  checked={filters["1"]}
                  name="1"
                  onChange={handleFilterChange}
                />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </div>

          <div
            className={styles.filterItemElement}
            /* onClick={(e) => handleClick(e, item)}  */
          >
            <div className={styles.filterItemValue}>
              <label className={styles.checkboxContainer}>
                2 пересадки
                <input
                  type="checkbox"
                  checked={filters["2"]}
                  name="2"
                  onChange={handleFilterChange}
                />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </div>

          <div
            className={styles.filterItemElement}
            /* onClick={(e) => handleClick(e, item)}  */
          >
            <div className={styles.filterItemValue}>
              <label className={styles.checkboxContainer}>
                3 пересадки
                <input
                  type="checkbox"
                  checked={filters["3"]}
                  name="3"
                  onChange={handleFilterChange}
                />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
