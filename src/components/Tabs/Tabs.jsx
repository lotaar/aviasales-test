import React, { useEffect } from "react";
import classnames from "classnames";
import styles from './tabs.module.css'
import { fetchData } from "../../api/api";


const Tabs = (props) => {
    useEffect(()=>{
        fetchData()
    })
    
    return(
        <ul className={styles.tabs}>
    {props.tabs.map(item => (
      <li
        key={item.id}
         className={classnames(styles.tab, {[styles.tabIsActive]: item.isActive})} 
        onClick={() => props.handleClick(item)}
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