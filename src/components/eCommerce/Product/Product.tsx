import { memo, useEffect, useState } from "react";
import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
import { addtoCart } from "@store/cart/cartSlice";
import { Button, Modal, Spinner } from "react-bootstrap";
import { actLikeToggle } from "@store/wishlist/wishlistslices";
import ProductInfo from "../ProductInfo/ProductInfo";

// SVG
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";

// Styles
import styles from "./styles.module.css";
const {  maxSize, wishlistBtn } = styles;

// Props Destructing //
const Product = memo(({ id, title, price, img, max, quantity, isLiked, isAuthenticated }: TProduct) => {
    const dispatch = useAppDispatch();

    const [showModal, setShowModal] = useState(false)

    const [isBtnDisabeld, setIsBtndisabeld] = useState(false);

    const [isLoading, setIsloading] = useState(false);


    const currentRemainingQuantity = max - (quantity ?? 0); //!  ( condition ?? ) called = collasing operator

    const quantityReachedToMAx = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
        //NOt False == true
        if (!isBtnDisabeld) {
            return;
        }

        const debounce = setTimeout(() => {
            setIsBtndisabeld(false);
        }, 300);

        return () => clearTimeout(debounce);
    }, [isBtnDisabeld]);

    const addtoCartHandler = () => {
        dispatch(addtoCart(id));
        setIsBtndisabeld(true);
    };

    const actLinkToggleHandler = () => {
        if (isAuthenticated) {
            if (!isLoading) {
                setIsloading(true);
                dispatch(actLikeToggle(id))
                    .unwrap()
                    .then(() => {
                        setIsloading(false);
                    })
                    .catch(() => {
                        setIsloading(false);
                    });
            }
        }else{
            setShowModal(true)
        }

    };

    return (

        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Required</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You need to login first to add this item to your wishlist.
                </Modal.Body>
            </Modal>


            <ProductInfo title={title} price={price} img={img} >
                <div className={wishlistBtn} onClick={actLinkToggleHandler}>
                    {isLoading ? (
                        <Spinner size="sm" variant="primary" animation="border" />
                    ) : isLiked ? (
                        <LikeFill />
                    ) : (
                        <Like />
                    )}
                </div>
                <p className={maxSize}>
                    {!currentRemainingQuantity
                        ? "You reach to the limit"
                        : `You can add : ${currentRemainingQuantity} limits`}
                </p>
                <Button
                    variant="info"
                    style={{
                        color: "white",
                        width: "100%",
                        backgroundColor:
                            isBtnDisabeld || quantityReachedToMAx ? "#343a40" : undefined,
                        // cursor: isBtnDisabeld || quantityReachedToMAx ? "no-drop" : "pointer",
                    }}
                    onClick={addtoCartHandler}
                    disabled={isBtnDisabeld || quantityReachedToMAx}
                >
                    {isBtnDisabeld ? (
                        <>
                            <Spinner animation="border" size="sm" /> Loading...
                        </>
                    ) : (
                        "Add to Cart"
                    )}
                </Button>
            </ProductInfo>
        </>
    );
});

export default Product;
