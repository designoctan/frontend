'use client';
import { Column } from 'primereact/column';
import { TabPanel, TabView } from 'primereact/tabview';
import React from 'react';
import { DataTable, DataTableExpandedRows, DataTableFilterMeta } from 'primereact/datatable';

const Orders = () => {
    const TabsList = ['New', 'Ready To Ship', 'Pickups & Manifests', 'In Transit', 'Delivered', 'RTO', 'All'];
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
  console.log('called');
  
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
