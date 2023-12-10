import axios from "axios";
import { base_url } from "../authService";

const get_orders_url = '/user/order';

export const getOrdersService = async (token:string): Promise<any> => {
    return await axios.get(base_url + get_orders_url, {headers:{
        Authorization:`Bearer ${token}`
    }});
};
