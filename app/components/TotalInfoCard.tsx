import React from 'react';

interface TotalInfoCardProps {
    title: string;
    priceOrder: number;
    subTitle: string;
    iconText: string;
    cardBackgroundColor?: string; 
}

const TotalInfoCard: React.FC<TotalInfoCardProps> = ({ title, priceOrder, subTitle, iconText, cardBackgroundColor }) => {
    const cardStyle = {
        backgroundColor: cardBackgroundColor || 'inherit', 
    };

    return (
        <div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0" style={cardStyle}>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '3.5rem', height: '3.5rem' }}>
                            <i className={`pi ${iconText} text-blue-500 text-2xl`} />
                        </div>
                        <div>
                            <span className="block text-900 font-medium mb-3">{title}</span>
                            <div className="text-900 font-medium text-xl">{priceOrder}</div>
                            <div className="text-900 font-medium text-base">{subTitle}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalInfoCard;
