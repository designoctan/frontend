'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setAuthUser } from '../redux/auth/authSlice';

const PrivateRoute = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);

    useEffect(() => {
        const localUser: string | null = localStorage.getItem('user');
        if (localUser) {
            const storedUser = JSON.parse(localUser);
            if (!user.data && !storedUser) {
                router.push('/login');
            } else if (!user.data && storedUser) {
                dispatch(setAuthUser(storedUser));
            }
        } else {
            router.push('/login');
        }
    }, [user.data, dispatch, router]);

    return user.data ? <>{children}</> : null;
};

export default PrivateRoute;
