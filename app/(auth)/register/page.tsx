/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

const SignupPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
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
                        {/* <div className="text-center mb-5">
                            <img src="/demo/images/login/avatar.png" alt="Image" height="50" className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Welcome, Isabel!</div>
                            <span className="text-600 font-medium">Sign in to continue</span>
                        </div> */}

                        <div>
                            <label htmlFor="name" className="block text-900 text-xl font-medium mb-2">
                                Name
                            </label>
                            <InputText id="name" type="text" placeholder="Name" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                Email
                            </label>
                            <InputText id="email1" type="text" placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            <label htmlFor="contact_no" className="block text-900 text-xl font-medium mb-2">
                                Contact No
                            </label>
                            <InputText id="contact_no" type="text" placeholder="Enter Contact No" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Password
                            </label>
                            <Password inputId="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                            <label htmlFor="company_name" className="block text-900 text-xl font-medium mb-2">
                                Company Name
                            </label>
                            <InputText id="company_name" type="text" placeholder="Company Name" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />
                            <div className="text-center text-xl mb-3">
                                <span>By submitting this, you agree to our </span><br/>
                                <a
                                    className="font-medium no-underline cursor-pointer"
                                    style={{ color: 'var(--primary-color)' }}
                                    onClick={() => {
                                        router.push('/#');
                                    }}
                                >
                                    <span style={{ color: 'your-terms-color' }}>Terms of Service</span>
                                </a>
                                <span> and </span>
                                <a
                                    className="font-medium no-underline cursor-pointer"
                                    style={{ color: 'var(--primary-color)' }}
                                    onClick={() => {
                                        router.push('/#');
                                    }}
                                >
                                    <span style={{ color: 'your-privacy-color' }}>Privacy Policy</span>
                                </a>
                            </div>
                            <Button label="Start Shipping" className="w-full p-3 text-xl" onClick={() => router.push('/')}></Button>
                            <div className="text-center mt-5">
                                <span>Have an account ? </span>
                                <a
                                    className="font-medium no-underline cursor-pointer"
                                    style={{ color: 'var(--primary-color)' }}
                                    onClick={() => {
                                        router.push('/login');
                                    }}
                                >
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
