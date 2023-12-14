'use client';
import { useEffect, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setAuthUser } from '../redux/auth/authSlice';
import { TAuthState } from '../redux/auth';

interface PrivateRouteProps {
    children?: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const reduxState = useSelector((state: { auth: TAuthState }) => state.auth);

    useEffect(() => {
        const localUser = localStorage.getItem('user');
        const isLoginOrRegisterPage = ['/register', '/login'].includes(window.location.pathname);

        if (!localUser) {
            if (isLoginOrRegisterPage) {
                router.replace(window.location.pathname);
                return;
            } else {
                router.replace('/login');
                return;
            }
        }

        const storedUser = JSON.parse(localUser);

        if (!reduxState.currentUser && storedUser) {
            dispatch(setAuthUser(storedUser));
        } else if (reduxState.currentUser && isLoginOrRegisterPage) {
            router.replace('/dashboard');
        }
    }, [reduxState.currentUser, dispatch, router]);

    return reduxState.currentUser ? <>{children}</> : <>{children}</>;
};

export default PrivateRoute;
