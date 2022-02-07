import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://front-test.beta.aviasales.ru/search"
    );
    const searchId =  response.data.searchId;
    const responseTickets = await axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    );
    console.log(responseTickets)
    return responseTickets.data.tickets
    
    
  } catch (e) {
     console.log(e.name + ':' + e.error)
  }
}

export { fetchData };

/* let  fetchData =() => {
    const response = axios.get('https://front-test.beta.aviasales.ru/search')
    const searchId = response.data.searchId
    const responseTickets = axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
    return responseTickets
} */
