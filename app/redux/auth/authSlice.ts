import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginService, registerService } from '../../api/authService';
import { TAuthState } from '.';

const initialState: TAuthState = {
    success: false,
    loading: false,
    currentUser: null,
    error: ''
};

export const loginAsync = createAsyncThunk('login/fetch', async (args: { email: string; password: string }) => {
    try {
        const response = await loginService(args.email, args.password);
        return await response.data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.message || error?.message || 'Something went wrong!');
    }
});

export const registerAsync = createAsyncThunk('register/fetch', async (args: { email: string; password: string; mobileNumber: string; name: string }) => {
    try {
        const response = await registerService(args.email, args.password, args.mobileNumber, args.name);
        return await response.data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.message || error?.message || 'Something went wrong!');
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<any>) => {
            state.currentUser = action.payload;
        }
    },
    extraReducers: (builder) => {
        // Login request
        builder
            .addCase(loginAsync.pending, (state: TAuthState) => {
                state.loading = true;
            })
            .addCase(loginAsync.fulfilled, (state: TAuthState, action: PayloadAction<any>) => {
                localStorage.setItem('user', JSON.stringify(action.payload?.data));
                state.loading = false;
                state.currentUser = action.payload.data;
                state.success = true;
            })
            .addCase(loginAsync.rejected, (state: TAuthState, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message as string;
            });
        // Register request
        builder
            .addCase(registerAsync.pending, (state: TAuthState) => {
                state.loading = true;
            })
            .addCase(registerAsync.fulfilled, (state: TAuthState, action: PayloadAction<any>) => {
                state.loading = false;
                state.currentUser = action.payload.data;
                state.success = true;
            })
            .addCase(registerAsync.rejected, (state: TAuthState, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message as string;
            });
    }
});

export const { setAuthUser } = authSlice.actions;

export default authSlice.reducer;
