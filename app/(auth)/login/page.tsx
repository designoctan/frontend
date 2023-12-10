/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../redux/auth/authSlice';

const initialState = {
    email: 'parag@gmail.com',
    password: 'admin@123',
    isRemember: false
};

const LoginPage = () => {
    const [state, setState] = useState(initialState);
    const { layoutConfig } = useContext(LayoutContext);
    const dispatch = useDispatch();
    const router = useRouter();

    const reduxState = useSelector((state: any) => state.auth);

    if (reduxState.data && reduxState.success) {
        router.replace('/dashboard');
    }
    
    if (reduxState.error!=='') {
        toast(reduxState.error);
    }

    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });
      
    return (
        <>
            <div className={containerClassName}>
                <div className="flex flex-column align-items-center justify-content-center">
                    <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
                    <div
                        style={{
                            borderRadius: '56px',
                            padding: '0.3rem',
                            background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                        }}
                    >
                        <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                            <div className="text-center mb-5">
                                <div className="text-900 text-3xl font-medium mb-3">Welcome back !</div>
                                <span className="text-600 font-medium">Login to Your Account</span>
                            </div>
                            <div>
                                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <InputText id="email1" type="text" placeholder="Email address" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                                <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                    Password
                                </label>
                                <Password
                                    inputId="password1"
                                    value={state.password}
                                    onChange={(e) => setState({ ...state, password: e.target.value })}
                                    placeholder="Password"
                                    toggleMask
                                    className="w-full mb-5"
                                    inputClassName="w-full p-3 md:w-30rem"
                                ></Password>

                                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                    <div className="flex align-items-center">
                                        <Checkbox inputId="rememberme1" checked={state.isRemember} onChange={(e) => setState({ ...state, isRemember: !state.isRemember })} className="mr-2"></Checkbox>
                                        <label htmlFor="rememberme1">Remember me</label>
                                    </div>
                                    <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                        Forgot password?
                                    </a>
                                </div>
                                <Button
                                    label={reduxState.loading ? 'Loading...' : 'Sign In'}
                                    className="w-full p-3 text-xl"
                                    disabled={reduxState.loading}
                                    onClick={() => {
                                        dispatch(loginAsync({ email: state.email, password: state.password }) as any);
                                    }}
                                ></Button>
                                <div className="text-center mt-5">
                                    <span>Dont have an account ? </span>
                                    <a
                                        className="font-medium no-underline cursor-pointer"
                                        style={{ color: 'var(--primary-color)' }}
                                        onClick={() => {
                                            router.push('/register');
                                        }}
                                    >
                                        Signup
                                    </a>
                                </div>
                                <div className="text-center mt-5">
                                    <div className="flex justify-content-center gap-3 mt-3">
                                        <Button className="p-button-danger" onClick={() => {}}>
                                            <i className="pi pi-google pr-2"> </i> Google
                                        </Button>

                                        <Button className="p-button-primary" onClick={() => {}}>
                                            <i className="pi pi-facebook pr-2"></i> Facebook
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default LoginPage;
