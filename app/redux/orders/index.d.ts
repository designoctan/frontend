
export type TOrdersState = {
    success: boolean;
    loading: boolean;
    orders: TOrder[] | null;
    selectedOrder: TOrder | null;
    error: string;
};

interface TOrder {
    giftWrap: boolean;
    isDeleted: boolean;
    deletedAt: string;
    shippingAddress: string;
    pickupAddresh: string;
    orderId: string;
    date: string;
    createdBy: string;
    updatedBy: string;
    id: string;
}
