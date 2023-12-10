'use client';
import { Column } from 'primereact/column';
import { TabPanel, TabView } from 'primereact/tabview';
import React, { useEffect } from 'react';
import { DataTable, DataTableExpandedRows, DataTableFilterMeta } from 'primereact/datatable';
import { useDispatch, useSelector } from 'react-redux';
import { TAuthState } from '../../../redux/auth';
import { ordersAsync } from '../../../redux/orders/ordersSlice';
import { AsyncThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { TOrdersState } from '../../../redux/orders';

const Orders = () => {
    // TODO: create constant file for constant variables
    const TabsList = ['New', 'Ready To Ship', 'Pickups & Manifests', 'In Transit', 'Delivered', 'RTO', 'All'];

    const reduxState = useSelector((state: { auth: TAuthState; orders: TOrdersState }) => state);
    const dispatch = useDispatch();
console.log(reduxState.orders.orders);

    useEffect(() => {
        if (reduxState.auth.currentUser?.tokens.access.token && reduxState.orders.orders === null) {
            dispatch(ordersAsync({ token: reduxState.auth.currentUser?.tokens.access.token }) as any);
        }
    }, []);
    return (
        <div>
            <TabView>
                {TabsList.map((tab) => (
                    <TabPanel header={tab} key={tab}>
                        <CommonDataTable />
                    </TabPanel>
                ))}
            </TabView>
        </div>
    );
};

const CommonDataTable = () => {
    return (
        <>
            <DataTable value={[]} paginator className="p-datatable-gridlines" showGridlines rows={10} dataKey="id" filters={undefined} filterDisplay="menu" loading={false} responsiveLayout="scroll" emptyMessage="No customers found." header={[]}>
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={<></>} filter filterPlaceholder="Search by country" filterClear={''} filterApply={''} />
                <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={<></>} filter filterElement={<></>} />
                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={<></>} filter filterElement={<></>} />
                {/* <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} /> */}
            </DataTable>
        </>
    );
};

export default Orders;
