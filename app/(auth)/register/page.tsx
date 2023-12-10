/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from '../../redux/auth/authSlice';

const initialState = {
    email: '',
    password: '',
    mobileNumber: '',
    companyName: '',
    name: ''
};

const SignupPage = () => {
    const [state, setState] = useState(initialState);
    const { layoutConfig } = useContext(LayoutContext);
    const router = useRouter();
    const dispatch = useDispatch();
    const reduxState = useSelector((state: any) => state.auth);

    if (reduxState.error) {
       toast(reduxState.error)
    }
    
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <>
            <div className={containerClassName}>
                <div className="flex flex-column align-items-center justify-content-center">
                    {/* <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" /> */}
                    <div
                        style={{
                            borderRadius: '56px',
                            padding: '0.3rem',
                            background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                        }}
                    >
                        <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                            <div>
                                <label htmlFor="name" className="block text-900 text-xl font-medium mb-2">
                                    Name
                                </label>
                                <InputText id="name" type="text" placeholder="Name" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />

                                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <InputText id="email1" type="text" placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />

                                <label htmlFor="contact_no" className="block text-900 text-xl font-medium mb-2">
                                    Contact No
                                </label>
                                <InputText
                                    id="contact_no"
                                    type="text"
                                    placeholder="Enter Contact No"
                                    className="w-full md:w-30rem mb-5"
                                    style={{ padding: '1rem' }}
                                    value={state.mobileNumber}
                                    onChange={(e) => setState({ ...state, mobileNumber: e.target.value })}
                                />

                                <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                    Password
                                </label>
                                <Password
                                    inputId="password1"
                                    placeholder="Password"
                                    toggleMask
                                    className="w-full mb-5"
                                    inputClassName="w-full p-3 md:w-30rem"
                                    value={state.password}
                                    onChange={(e) => setState({ ...state, password: e.target.value })}
                                ></Password>

                                <label htmlFor="company_name" className="block text-900 text-xl font-medium mb-2">
                                    Company Name
                                </label>
                                <InputText
                                    id="company_name"
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full md:w-30rem mb-5"
                                    style={{ padding: '1rem' }}
                                    value={state.companyName}
                                    onChange={(e) => setState({ ...state, companyName: e.target.value })}
                                />
                                <div className="flex align-items-center justify-content-between mb-5 gap-5"></div>
                                <Button
                                    label="Start Shipping"
                                    className="w-full p-3 text-xl"
                                    onClick={() => {
                                        dispatch(registerAsync({ email: state.email, password: state.password, mobileNumber: state.mobileNumber, name: state.name }) as any);
                                        // router.push('/login')
                                    }}
                                ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default SignupPage;
