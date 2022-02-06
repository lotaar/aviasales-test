import { fetchData } from "../api/api";
import { dateStringToTime } from "../utils/helpers/dataFormatter";

const SET_TAB = "SET-TAB";
const SET_TICKETS = "SET_TICKETS";

const setTickets = (tickets) => {
  return {
    type: SET_TICKETS,
    tickets,
  };
};

const setTabs = (id, text, isActive) => {
  return {
    type: SET_TAB,
    data: { id, text, isActive },
  };
};

export const getTickets = () => (dispatch) => {
  fetchData().then((tickets) => {
    console.log(tickets);

    return dispatch(setTickets(tickets));
  });
};

let initialState = {
  tabs: [
    {
      id: 1,
      text: "Самый дешевый",
      isActive: true,
    },
    {
      id: 2,
      text: "Самый быстрый",
      isActive: false,
    },
  ],
  filers: [
    { id: 1, text: "Все", isChecked: false },
    { id: 2, text: "Без пересадок", isChecked: false },
    { id: 3, text: "1 пересадка", isChecked: false },
    { id: 4, text: "2 пересадки", isChecked: false },
    { id: 5, text: "3 пересадки", isChecked: false },
  ],
  tickets: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        ...action.data,
      };
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };

    default:
      return state;
  }
};

export default appReducer;
