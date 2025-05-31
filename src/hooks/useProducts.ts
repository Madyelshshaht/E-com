import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks"; // Dispatch and select reducers
import { actGetProductsbyCatPrefix, CleanUpProductsRecords } from "@store/products/productsslice"; //fetch API

const useProducts = () => {

    const params = useParams();
    const ProductsPrefix = params.prefix

    const dispatch = useAppDispatch();


    const { loading, error, records } = useAppSelector(state => state.products)
    console.log("records",records);

    const cartItems = useAppSelector(state => state.cart.items);
    // console.log("cartItemsc",cartItems);

    const wishlistItemsId = useAppSelector(state => state.wishlist.itemsId)

    const userAccesstoken = useAppSelector((state) => state.auth.accessToken)

    const productsFullInfo = records.map((el) => (
        {
            ...el,
            quantity: cartItems[el.id] || 0,
            isLiked: wishlistItemsId.includes(el.id),
            isAuthenticated: userAccesstoken ? true : false,
        }))





    useEffect(() => {
        const promise = dispatch(actGetProductsbyCatPrefix(params.prefix as string));
        return () => {
            dispatch(CleanUpProductsRecords())
            promise.abort();
        }
    }, [dispatch, params]);

    return { loading, error, productsFullInfo, params, ProductsPrefix }
}

export default useProducts
