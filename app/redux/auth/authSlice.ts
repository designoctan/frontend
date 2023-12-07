import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TResponse, loginService } from '../../api/authService';

const initialState = {
    success: false,
    loading: false,
    data: null
};

export const loginAsync = createAsyncThunk('login/fetch', async (args: { email: string; password: string }) => {
    const response: TResponse = await loginService(args.email, args.password);
    return await response.data;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action) => {
            state.data = action.payload
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                localStorage.setItem('user', JSON.stringify(action.payload?.data?.user));
                state.loading = false;
                state.data = action.payload.data;
                state.success = true;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    }
});

export const { setAuthUser} = authSlice.actions;


export default authSlice.reducer;
