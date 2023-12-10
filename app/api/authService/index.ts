import axios, { AxiosResponse } from 'axios';

export const base_url = 'https://enjoytheshow.in/v1';
const login_url = '/user/auth/login';
const register_url = '/user/auth/register';

export const loginService = async (email: string, password: string): Promise<any> => {
    return await axios.post(base_url + login_url, {
        email,
        password
    });
};

export const registerService = async (email: string, password: string, mobileNumber: string, name: string): Promise<any> => {
    return await axios.post(base_url + register_url, {
        email,
        password,
        name,
        mobileNumber
    });
};
