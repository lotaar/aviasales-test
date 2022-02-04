import React from "react";
import styles from './tickets.module.css'

const Tickets = (props) => {
    return(
      <div className={styles.tickets}>
            {props.tickets.map((item,index) => (
      <div className={styles.ticket} key={index}>
          <div className={styles.ticketTop}>
                <div className={styles.ticketPrice}>
                    {item.price}
                </div>
                <div className={styles.ticketCarrierImg}>
                <img src={`//pics.avs.io/99/36/${item.carrier}.png`} alt='Carrier Logo'/>
                </div>
          </div>
          <div className={styles.ticketBottom}>
              {item.segments.map((item,index) => (
                  <div className={styles.ticketInfo} key={index}>
                       <div className={styles.ticketEndpoint}>
                  <div className={styles.ticketEndpointTitile}>
                    {item.origin} - {item.destination}
                  </div>
                  <div> {item.date} - {item.duration}</div>
                </div>

                <div className={styles.ticketEndpoint}>
                  <div className={styles.ticketEndpointTitile}>
                    В ПУТИ
                  </div>
                  <div> {item.duration}</div>
                </div>

                <div className={styles.ticketEndpoint}>
                  <div className={styles.ticketEndpointTitile}>
                    ПЕРЕСАДКИ
                  </div>
                  <div> {item.stops.join(', ')}</div>
                </div>

                  </div>
              ))} 
          </div>
      </div>
    ))}
      </div>
    )
}

export default Tickets