import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/app-reducer";
import styles from "./filters.module.css";

const Filters = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e, item) => {
    if (e.target.name == -1) {
      
      return dispatch(
        setFilters(props.filters.map((filter) => {
          return {
            ...filter,
            isChecked: e.target.checked
          }
        })
          
        )
      );
    }

    return dispatch(
      setFilters(props.filters.map((filter) => {
        if (filter.id == e.target.name) {
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
