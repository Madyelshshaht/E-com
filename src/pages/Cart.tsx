import { Heading } from "@components/common";
import { Loading, LottieHandler } from "@components/feedback";
import { CartISubtotalPrice, CartItemList } from "@components/eCommerce";
import useCart from "@hooks/useCart";

const Cart = () => {
    const {
        loading,
        error,
        products,
        UserAccesToken,
        PlaceOrderStatus,
        changeQuantityHandler,
        RemoveItemHandler,
    } = useCart();

    return (
        <>
        
            <Heading title={`Your Cart`} />
            <Loading loading={loading} error={error} type="cart">
                {products.length ? (
                    <>
                        <CartItemList
                            products={products}
                            changeQuantityHandler={changeQuantityHandler}
                            RemoveItemHandler={RemoveItemHandler}
                        />
                        <CartISubtotalPrice
                            products={products}
                            UserAccesToken={UserAccesToken}
                        />
                    </>
                ) : PlaceOrderStatus === "succeeded" ? (
                    <LottieHandler
                        type="success"
                        message="Your order has been placed successfully"
                        style={{
                            width: "350px",
                            margin: "auto",
                            textAlign: "center",
                        }}
                    />
                ) : (
                    <LottieHandler type="Empty" message="your cart is empty" style={{width: "400px"}}/>
                )}
            </Loading>
        </>
    );
};

export default Cart;
