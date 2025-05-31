import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetOrders, resetOrderstatus  } from "@store/orders/ordersslice";
import { TProduct } from "@customTypes/product";


const useOrders = () => {
    const dispatch = useAppDispatch();
    const { error, loading , OrderList } = useAppSelector((state) => state.orders);
    const [showModel, SetshowModel] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);

    const handleCloseModel = () => {
        SetshowModel(false);
        setSelectedProduct([]);
    };

    const ViewDetailsHandler = (id: number) => {
        const ProductDetails = OrderList.find((order) => order.id === id);
        const newItems = ProductDetails?.items ?? [];
        setSelectedProduct((prev) => [...prev, ...newItems]);
        SetshowModel(true);
    };

    useEffect(() => {
        const promise = dispatch(actGetOrders());

        return () => {
            promise.abort();
            dispatch(resetOrderstatus());
        };
    }, [dispatch]);

    return { error, loading, OrderList, showModel, selectedProduct, handleCloseModel, ViewDetailsHandler   }
}

export default useOrders;