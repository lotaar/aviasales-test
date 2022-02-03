import axios from "axios";


let  fetchData =() => {
    const response = axios.get('https://front-test.beta.aviasales.ru/search').then(response=>console.log(response))
    const searchId = response.data.searchId
    const responseTickets = axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
    return responseTickets
}

fetchData()

export {fetchData}