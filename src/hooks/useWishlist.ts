import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { cleanWishlistProductsFullInfo , actGetWishlist } from "@store/wishlist/wishlistslices";

const useWishlist = () => {
    const dispatch = useAppDispatch();
    const { loading, error, productsFullInfo } = useAppSelector((state) => state.wishlist)
    const cartItems = useAppSelector((state) => state.cart.items)

    useEffect(() => {
        const promise = dispatch(actGetWishlist("productsFullInfo"));
        return ()=>{
            promise.abort();
            dispatch(cleanWishlistProductsFullInfo())
        }
    }, [dispatch])

    const records = productsFullInfo.map((el) => (
        {
            ...el, quantity: cartItems[el.id] || 0,
            isLiked: true,
            isAuthenticated: true,
        }))

    return { loading , error , records}
}

export default useWishlist ;
