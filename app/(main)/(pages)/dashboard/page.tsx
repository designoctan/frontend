'use client';
import React from 'react';
import TotalInfoCard from '../../../components/TotalInfoCard';

const Dashboard = () => {
    return (
        <div>
            dashboard
            <div className="d-flex">
            <TotalInfoCard title="Today's Orders" priceOrder={50} subTitle="Yesterday 1" iconText="pi-shopping-cart" cardBackgroundColor="#ffffff" />
            <TotalInfoCard title="Today's Revenue" priceOrder={50} subTitle="Yesterday 11" iconText="pi-shopping-cart" cardBackgroundColor="#ffffff" />
            <TotalInfoCard title="Average Shipping" priceOrder={50} subTitle="" iconText="pi-shopping-cart" cardBackgroundColor="#ffffff" />
            </div>
        </div>
    );
};

export default Dashboard;
