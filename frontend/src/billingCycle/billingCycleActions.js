import axios from "axios";
import { clearSubmit } from "redux-form";
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingcycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    console.log(values)
    axios.post(`${BASE_URL}/billingcycles`, values)
    return {
        type: 'TEMP'
    }
}