import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize} from 'redux-form'; //action do reduxFrom
import { showTabs, selectTab } from "../common/tab/TabActions";
import billingCycleForm from "./billingCycleForm";

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {};

export function getList() {
    const request = axios.get(`${BASE_URL}/billingcycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post');
}

export function update(values){
    return submit(values, 'put');
}

export function del(values){
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : '';
        axios[method](`${BASE_URL}/billingcycles/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
            dispatch(init())
        })
        .catch(e => {
            console.log(e.response.data.errors)
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }  
}

export function showUpdate(billinCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billinCycle)
    ]
}

export function showDelete(billinCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billinCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}