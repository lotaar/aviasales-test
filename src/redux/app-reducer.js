import { fetchData } from "../api/api";
import { dateStringToTime } from "../utils/helpers/dataFormatter";

const SET_TAB = "SET_TAB";
const SET_TICKETS = "SET_TICKETS";
const SET_FILTERS = "SET_FILTERS";
const SET_TICKETS_ERROR = "SET_TICKETS_ERROR";

const setTickets = (tickets) => {
  return {
    type: SET_TICKETS,
    tickets,
  };
};

const setTicketsError = () => {
  return {
    type: SET_TICKETS_ERROR,
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
    data: filters,
  };
};

export const getTickets = () => (dispatch) => {
  fetchData()
    .then((tickets) => {
      const formattedTickets = tickets.map((ticket) => {
        return {
          ...ticket,
          stopsSum: ticket.segments.reduce(
            (a, b) => a.stops.length + b.stops.length
          ),
        };
      });

      return dispatch(setTickets(formattedTickets));
    })
    .catch((error) => {
      dispatch(setTicketsError());
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
  v2Filters: {
    "-1": true,
    0: true,
    1: true,
    2: true,
    3: true,
  },
  filters: [
    { id: -1, text: "Все", isChecked: true },
    { id: 0, text: "Без пересадок", isChecked: true },
    { id: 1, text: "1 пересадка", isChecked: true },
    { id: 2, text: "2 пересадки", isChecked: true },
    { id: 3, text: "3 пересадки", isChecked: true },
  ],
  tickets: [],
  ticketsIsLoading: true,
  isError: false,
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
        ticketsIsLoading: false,
      };
    case SET_FILTERS:
      return {
        ...state,
        v2Filters: { ...action.data },
      };
    case SET_TICKETS_ERROR:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default appReducer;
