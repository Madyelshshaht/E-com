import {  useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { TProduct } from "@customTypes/product";
import styles from "./styles.module.css";
import { Button, Modal, Spinner } from "react-bootstrap";
import actPlaceOrders from "@store/orders/act/actPlaceOrders";
import { ClearCartAfterPlaceOrder } from "@store/cart/cartSlice";

type TCartISubtotalPrice = {
    products: TProduct[];
    UserAccesToken: string | null;
};

const CartISubtotalPrice = ({
    products,
    UserAccesToken,
}: TCartISubtotalPrice) => {
    const dispatch = useAppDispatch();

    const [show, setShow] = useState(false);

    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const modelHandler = () => {
        setShow(!show);
        setError(null);
    };

    const PlacceOrderHandler = () => {
        setLoading(true)
        dispatch(actPlaceOrders(SubTotla))
            .unwrap()
            .then(() => {
                dispatch(ClearCartAfterPlaceOrder()); // emty Cart Page
                setShow(false);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const SubTotla = products.reduce((acc, el) => {
        const price = el.price;
        const quantity = el.quantity;
        if (quantity && typeof quantity === "number") {
            return acc + price * quantity;
        } else {
            return acc;
        }
    }, 0);

    return (
        <>
            {/* backdrop="static" => Make Model not close when click out side the Model  && make shdow  */}
            <Modal show={show} onHide={modelHandler} backdrop="static"> 

                <Modal.Header closeButton>
                    <Modal.Title>Placing Order</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you want to place order with subtotal
                    <span className="fw-bold"> {SubTotla.toFixed(2)} EGP</span>
                    {!Loading && error && (
                        <p style={{ color: "#dc3545", marginTop: "10px" }}>{error}</p> /* Error message */
                    )}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modelHandler}>
                        Close
                    </Button>
                    <Button
                        variant="info"
                        style={{ color: "white" }}
                        onClick={PlacceOrderHandler}
                    >
                        {Loading ? (
                            <>
                                <Spinner size="sm"  animation="border" /> Loading...
                            </>
                        ) : (
                            "Confirm"
                        )}
                    </Button>
                </Modal.Footer>

            </Modal>
            <div className={styles.container}>
                <span>Subtotal: </span>
                <span>{SubTotla.toFixed(2)} EGP</span>
            </div>

            {UserAccesToken && (
                <div className={styles.container}>
                    <span> </span>
                    <span>
                        <Button
                            variant="info"
                            style={{ color: "white" }}
                            onClick={modelHandler}
                        >
                            Place Order
                        </Button>
                    </span>
                </div>
            )}
        </>
    );
};

export default CartISubtotalPrice;
