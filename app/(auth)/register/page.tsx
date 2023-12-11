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
import Link from 'next/link';

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
        toast(reduxState.error);
    }

    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <>
            <div className={containerClassName}>
                <div className="flex flex-column align-items-center justify-content-center my-5">
                    <div
                        style={{
                            borderRadius: '56px',
                            padding: '0.3rem',
                            background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                        }}
                    >
                        <div className="w-full surface-card py-4 px-5 sm:px-5 py-6" style={{ borderRadius: '53px' }}>
                            <div className="text-center mb-5">
                                <div className="text-900 text-3xl font-bold mb-4">Experience The Next-level Logistics</div>
                            </div>
                            <div>
                                <InputText id="name" type="text" placeholder="Name" className="w-full block md:w-30rem mb-4" style={{ padding: '1rem' }} value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
                                <InputText id="email1" type="text" placeholder="Email address" className="w-full block md:w-30rem mb-4" style={{ padding: '1rem' }} value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
                                <InputText
                                    id="contact_no"
                                    type="text"
                                    placeholder="Contact No"
                                    className="w-full block md:w-30rem mb-4"
                                    style={{ padding: '1rem' }}
                                    value={state.mobileNumber}
                                    onChange={(e) => setState({ ...state, mobileNumber: e.target.value })}
                                />
                                <Password
                                    inputId="password1"
                                    placeholder="Password"
                                    toggleMask
                                    className="w-full block mb-4"
                                    inputClassName="w-full p-3 md:w-30rem"
                                    value={state.password}
                                    onChange={(e) => setState({ ...state, password: e.target.value })}
                                ></Password>
                                <InputText
                                    id="company_name"
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full block md:w-30rem mb-5"
                                    style={{ padding: '1rem' }}
                                    value={state.companyName}
                                    onChange={(e) => setState({ ...state, companyName: e.target.value })}
                                />
                                <div className="flex align-items-center justify-content-between gap-5"></div>
                                <div className="text-center mb-5">
                                    <span>Buy Submitting this form, you agree to our </span>
                                    <br />
                                    <span>
                                        <Link href="#">Terms of Service</Link>
                                    </span>{' '}
                                    and{' '}
                                    <span>
                                        <Link href="#">Privacy and Policy</Link>
                                    </span>
                                </div>
                                <Button
                                    label="Start Shipping"
                                    className="w-full p-3 text-xl"
                                    onClick={() => {
                                        dispatch(registerAsync({ email: state.email, password: state.password, mobileNumber: state.mobileNumber, name: state.name }) as any);
                                        // router.push('/login')
                                    }}
                                ></Button>
                                <div className="text-center mt-5">
                                    <span>Have an account ? </span>
                                    <strong>
                                        <Link className="font-medium no-underline cursor-pointer" style={{ color: 'var(--primary-color)' }} href="/login">
                                            Login
                                        </Link>
                                    </strong>
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

export default SignupPage;
