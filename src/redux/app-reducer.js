import { fetchData } from "../api/api";
import { dateStringToTime } from "../utils/helpers/dataFormatter";

const SET_TAB = "SET_TAB";
const SET_TICKETS = "SET_TICKETS";
const SET_FILTERS = "SET_FILTERS";

const setTickets = (tickets) => {
  return {
    type: SET_TICKETS,
    tickets,
  };
};

export const setTabs = (item) => {
  return {
    type: SET_TAB,
    data: item,
  };
};

export const setFilters = (filters) => {
  return { 
    type: SET_FILTERS,
    data:filters,
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
  filters: [
    { id: '-1', text: "Все", isChecked: false },
    { id: '0', text: "Без пересадок", isChecked: false },
    { id: '1', text: "1 пересадка", isChecked: false },
    { id: '2', text: "2 пересадки", isChecked: false },
    { id: '3', text: "3 пересадки", isChecked: false },
  ],
  tickets: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        tabs: state.tabs.map((t) => {
          if (t.id === action.data.id) {
            return { ...t, isActive: !action.data.isActive };
          }
          return { ...t, isActive: !t.isActive };
        }),
      };
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };
      case SET_FILTERS:
        return{
          ...state,
          filters:[...action.data],
        }

    default:
      return state;
  }
};

export default appReducer;
