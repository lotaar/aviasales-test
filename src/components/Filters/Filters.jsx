import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/app-reducer";
import styles from "./filters.module.css";

const Filters = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e, item) => {
    if (e.target.name == -1) {
      
      return dispatch(
        setFilters([
          { id: -1, text: "Все", isChecked: true },
          { id: 0, text: "Без пересадок", isChecked: true },
          { id: 1, text: "1 пересадка", isChecked: true },
          { id: 2, text: "2 пересадки", isChecked: true },
          { id: 3, text: "3 пересадки", isChecked: true },
        ])
      );
    }

    return dispatch(
      setFilters(props.filters.map((filter) => {
        if (filter.id === e.target.name && filter.id !==-1) {
          return {
            ...filter,
            isChecked:!filter.isChecked
          } 
        } return filter
      })
    ));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterItem}>
        <div className={styles.filterItemTitle}>Количество пересадок</div>
        <div className={styles.filterItemList}>
          {props.filters.map((item) => (
            <div
              key={item.id}
              className={styles.filterItemElement}
              /* onClick={(e) => handleClick(e, item)}  */
            >
              <div className={styles.filterItemValue}>
                <label className={styles.checkboxContainer}>
                  {item.text}
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    name={item.id}
                    onChange={(e) => handleClick(e, item)}
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
