import { createAsyncThunk, createSlice,PayloadAction } from '@reduxjs/toolkit';
import { loginService, registerService } from '../../api/authService';

const initialState = {
    success: false,
    loading: false,
    data: null,
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
        state.data = action.payload;
      },
    },
    extraReducers: (builder) => {
      // Login request
      builder
        .addCase(loginAsync.pending, (state) => {
          state.loading = true;
        })
        .addCase(loginAsync.fulfilled, (state, action: PayloadAction<any>) => {
          localStorage.setItem('user', JSON.stringify(action.payload?.data?.user));
          state.loading = false;
          state.data = action.payload.data;
          state.success = true;
        })
        .addCase(loginAsync.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.success = false;
          state.error = action.payload.message as string;
        });
      // Register request
      builder
        .addCase(registerAsync.pending, (state) => {
          state.loading = true;
        })
        .addCase(registerAsync.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = action.payload.data;
          state.success = true;
        })
        .addCase(registerAsync.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.success = false;
          state.error = action.payload.message as string;
        });
    },
  });

export const { setAuthUser } = authSlice.actions;

export default authSlice.reducer;
