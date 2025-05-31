import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
    actGetProductsByItems,
    cartItemChangeQuantity,
    cartItemRemove,
    CleanCartproductsFullInfo,
} from "@store/cart/cartSlice";
import { resetOrderstatus } from "@store/orders/ordersslice";

const useCart = () => {
    const dispatch = useAppDispatch();
    const { items, productsFullInfo, loading, error } = useAppSelector(
        (state) => state.cart
    );

    // auth.accesstoken
    const UserAccesToken = useAppSelector((state) => state.auth.accessToken)

    // order.loading
    const PlaceOrderStatus = useAppSelector((state) => state.orders.loading);

    useEffect(() => {
        const promise = dispatch(actGetProductsByItems());
        return () => {
            promise.abort();
            dispatch(CleanCartproductsFullInfo());
            // reset cart after do place order show lotifiles (yes) then when go to cart again cart is (empty)
            dispatch(resetOrderstatus());
        };
    }, [dispatch]);

    const products = productsFullInfo.map((el) => ({
        ...el,
        quantity: items[el.id],
    }));

    // use Callback to caching id , quantity  => to not render when the same value
    const changeQuantityHandler = useCallback(
        (id: number, quantity: number) => {
            dispatch(cartItemChangeQuantity({ id, quantity }));
        },
        [dispatch]
    );

    const RemoveItemHandler = useCallback(
        (id: number) => {
            dispatch(cartItemRemove(id));
        },
        [dispatch]
    );

    return { loading, error, products, UserAccesToken, PlaceOrderStatus, changeQuantityHandler, RemoveItemHandler };
};

export default useCart;
