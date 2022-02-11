import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  addMinutesDateString,
  convertMinsToHrsMins,
  dateStringToTime,
  dateToTime,
  formatDurationText,
  getTimeFromMins,
} from "../../utils/helpers/dataFormatter";
import { priceFormatter } from "../../utils/helpers/priceFormatter";
import { sortByPrice, sortByTime } from "../../utils/helpers/sortTickets";
import { numberOfTransfers } from "../../utils/helpers/transfersNumber";
import Spinner from "../common/Spinner";
import styles from "./tickets.module.css";

const Tickets = (props) => {
  const isLoading = useSelector((state) => state.ticketsIsLoading);
  const filters = useSelector((state) => state.filters);

  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5);
  const showMoreItems = () => {
    setVisibleTicketsCount(visibleTicketsCount + 5);
  };

  const visibleTickets = useMemo(() => {
    const filteredTickets = props.tickets.filter((ticket) => {
      const foundFilter = filters.find((filter) => {
        return filter.id === ticket.stopsSum;
      });

      return foundFilter?.isChecked;
    });

    console.log(filteredTickets);

    const sortedTickets = props.tabs[0].isActive
      ? sortByPrice(filteredTickets)
      : sortByTime(filteredTickets);

    return sortedTickets.filter((_, index) => index <= visibleTicketsCount);
  }, [props.tickets, props.tabs, visibleTicketsCount, filters]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.tickets}>
      {visibleTickets.map((item, index) => (
        <div className={styles.ticket} key={index}>
          <div className={styles.ticketTop}>
            <div className={styles.ticketPrice}>
              {priceFormatter(item.price)}
            </div>
            <div className={styles.ticketCarrierImg}>
              <img
                src={`//pics.avs.io/99/36/${item.carrier}.png`}
                alt="Carrier Logo"
              />
            </div>
          </div>
          <div className={styles.ticketBottom}>
            {item.segments.map((item, index) => (
              <div className={styles.ticketInfo} key={index}>
                <div className={styles.ticketEndpoint}>
                  <div className={styles.ticketEndpointTitle}>
                    {item.origin} - {item.destination}
                  </div>
                  <div>{formatDurationText(item.date, item.duration)}</div>
                </div>

                <div className={styles.ticketEndpoint}>
                  <div className={styles.ticketEndpointTitle}>В пути</div>
                  <div> {convertMinsToHrsMins(item.duration)}</div>
                </div>

                <div className={styles.ticketEndpoint}>
                  <div className={styles.ticketEndpointTitle}>
                    {numberOfTransfers(item.stops.length)}
                  </div>
                  <div> {item.stops.join(", ")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className={styles.showMoreButton} onClick={showMoreItems}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default Tickets;
