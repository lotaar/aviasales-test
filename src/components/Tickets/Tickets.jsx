import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addMinutesDateString, convertMinsToHrsMins, dateStringToTime, dateToTime, formatDurationText, getTimeFromMins } from "../../utils/helpers/dataFormatter";
import { priceFormatter } from "../../utils/helpers/priceFormatter";
import { sortByPrice, sortByTime } from "../../utils/helpers/sortTickets";
import { numberOfTransfers } from "../../utils/helpers/transfersNumber";
import Spinner from "../common/Spinner";
import styles from './tickets.module.css'

const Tickets = (props) => {
  const isLoading = useSelector((state) => state.ticketsIsLoading)
  const [visibleTickets, setVisibleTickets] = useState(5)
  const showMoreItems = () => {
    setVisibleTickets((prevValue) => prevValue + 5)
  }

  props.tabs[0].isActive ? sortByPrice(props.tickets) : sortByTime(props.tickets)
  //props.tickets.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
/*   props.tickets.sort((a, b) => {
    let timeA=0;
    let timeB=0;
    
    a.segments.forEach(e => {
      timeA += e.duration
    })

    b.segments.forEach(e => {
      timeB += e.duration
    })
   if(timeA>timeB) {
     return 1
   } return -1

  }); */
  //sortByPrice(props.tickets)
  //sortByTime(props.tickets)

  

  if(isLoading) {
    return <Spinner/>
  }

    return(
      <div className={styles.tickets}>
            {props.tickets.slice(0,visibleTickets).map((item,index) => (
      <div className={styles.ticket} key={index}>
          <div className={styles.ticketTop}>
                <div className={styles.ticketPrice}>
                    {priceFormatter(item.price)}
                </div>
                <div className={styles.ticketCarrierImg}>
                <img src={`//pics.avs.io/99/36/${item.carrier}.png`} alt='Carrier Logo'/>
                </div>
          </div>
          <div className={styles.ticketBottom}>
              {item.segments.map((item,index) => (
                  <div className={styles.ticketInfo} key={index}>
                       <div className={styles.ticketEndpoint}>
                  <div className={styles.ticketEndpointTitle}>
                    {item.origin} - {item.destination}
                  </div>
                  <div>{formatDurationText(item.date, item.duration)}</div>
                </div>

                <div className={styles.ticketEndpoint}>
                  <div className={styles.ticketEndpointTitle}>
                    В пути
                  </div>
                  <div> {convertMinsToHrsMins(item.duration)}</div>
                </div>

                <div className={styles.ticketEndpoint}>
                  <div className={styles.ticketEndpointTitle}>
                    {numberOfTransfers(item.stops.length )}
                  </div>
                  <div> {item.stops.join(', ')}</div>
                </div>

                  </div>
              ))} 
          </div>
      </div>
    ))}
    <button className={styles.showMoreButton} onClick={showMoreItems}>Показать еще 5 билетов!</button>
      </div>
    )
}

export default Tickets