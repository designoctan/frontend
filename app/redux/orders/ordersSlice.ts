import { createAsyncThunk, createSlice,PayloadAction } from '@reduxjs/toolkit';
import { loginService, registerService } from '../../api/authService';
import { getOrdersService } from '../../api/orderService';
import { TOrdersState } from '.';

const initialState:TOrdersState = {
    success: false,
    loading: false,
    orders: null,
    selectedOrder:null,
    error: ''
};

export const ordersAsync = createAsyncThunk('orders/fetch', async (args: { token: string }) => {
    try {
        const response = await getOrdersService(args.token);
        return await response.data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.message || error?.message || 'Something went wrong!');
    }
});



export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      // get orders request
      builder
        .addCase(ordersAsync.pending, (state:TOrdersState) => {
          state.loading = true;
        })
        .addCase(ordersAsync.fulfilled, (state:TOrdersState, action: PayloadAction<any>) => {
          console.log(action.payload);
          
          state.loading = false;
          state.orders = action.payload.data;
          state.success = true;
        })
        .addCase(ordersAsync.rejected, (state:TOrdersState, action: PayloadAction<any>) => {
          state.loading = false;
          state.success = false;
          state.error = action.payload.message as string;
        });
     
    },
  });

export const {  } = ordersSlice.actions;

export default ordersSlice.reducer;
