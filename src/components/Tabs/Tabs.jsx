import React, { useEffect } from "react";
import classnames from "classnames";
import styles from './tabs.module.css'
import { fetchData } from "../../api/api";
import { getTickets, setTabs } from "../../redux/app-reducer";
import { useDispatch } from "react-redux";


const Tabs = (props) => {
  const dispatch = useDispatch()

    
    return(
        <ul className={styles.tabs}>
    {props.tabs.map(item => (
      <li
        key={item.id}
         className={classnames(styles.tab, {[styles.tabIsActive]: item.isActive})} 
        onClick={() => dispatch(setTabs(item))}
      >
        {item.text}
      </li>
    ))}
  </ul>
    )
       
}



export default Tabs

/* className={({ isActive }) => isActive && styles.active}

className={({ isActive }) => classNames({ [styles.active]: isActive })} */