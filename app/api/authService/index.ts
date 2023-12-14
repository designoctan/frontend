import axios, { AxiosResponse } from 'axios';

export const base_url = 'https://enjoytheshow.in/api/v1';

export type TSocialAuthEnum = 'facebook' | 'google';

const login_url = '/user/auth/login';
const register_url = '/user/auth/register';
const social_auth_url = '/user/auth/';

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

export const socialMediaAuthService = async (access_token: string, socialMediaType: TSocialAuthEnum): Promise<any> => {
    return await axios.post(base_url + social_auth_url + socialMediaType, {
        access_token: access_token
    });
};
