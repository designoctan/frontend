import axios, { AxiosResponse } from 'axios';

const login_url = 'https://enjoytheshow.in/v1/user/auth/login';

export interface TResponse {
    success: boolean;
    data: any;
    message: string;
}

export const loginService = async (email: string, password: string): Promise<any> => {
    return await axios.post(login_url, {
        email,
        password
    });
};
