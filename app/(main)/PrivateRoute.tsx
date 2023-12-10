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
        const localUser: string | null = localStorage.getItem('user');
        if (localUser) {
            const storedUser = JSON.parse(localUser);
            if (!reduxState.currentUser && !storedUser) {
                router.push('/login');
            } else if (!reduxState.currentUser && storedUser) {
                dispatch(setAuthUser(storedUser));
            }
        } else {
            router.push('/login');
        }
    }, [reduxState.currentUser, dispatch, router]);

    return reduxState.currentUser ? <>{children}</> : null;
};

export default PrivateRoute;
