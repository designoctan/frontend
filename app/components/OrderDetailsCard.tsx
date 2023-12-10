import React from 'react';

interface OrderDetialsCardProps {
    title: string;
    priceOrder: number;
    subTitle: string;
    iconText: string;
    cardBackgroundColor?: string; 
}

const OrderDetialsCard: React.FC<OrderDetialsCardProps> = ({ title, priceOrder, subTitle, iconText, cardBackgroundColor }) => {
    const cardStyle = {
        backgroundColor: cardBackgroundColor || 'inherit', 
    };

    return (
        <div>
           <div className="col-12">
                <div className="card">
                    <h5>Advanced</h5>
                    <div className="p-fluid formgrid grid">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetialsCard;
