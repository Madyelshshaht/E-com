import { Button, Modal, Table } from "react-bootstrap";
import { Heading } from "@components/common";
import { Loading } from "@components/feedback"; //skeleton
import { ProductInfo } from "@components/eCommerce";
import useOrders from "@hooks/useOrders";
import { useAppDispatch } from "@store/hooks";
import actRemoveOrder from "@store/orders/act/actRemoveOrder";
import actClearOrders from "@store/orders/act/actClearOrders";

const Orders = () => {
    const dispatch = useAppDispatch();

    const {
        error,
        loading,
        OrderList,
        showModel,
        selectedProduct,
        handleCloseModel,
        ViewDetailsHandler,
    } = useOrders();
    return (
        <>
            <Modal show={showModel} onHide={handleCloseModel} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct.map((el) => (
                        <ProductInfo
                            key={el.id}
                            title={el.title}
                            price={el.price}
                            img={el.img}
                            quantity={el.quantity}
                            direction="column"
                            style={{ marginBottom: "20px" }}
                        />
                    ))}
                </Modal.Body>
            </Modal>

            <Heading title="My Order" />

            <Loading loading={loading} error={error} type="table">
                <Table hover striped bordered>
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Items</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array.isArray(OrderList) && OrderList?.map((el) => (
                            <tr key={el.id}>
                                <td>#{el.id}</td>
                                <td className="flex-column flex-md-row d-flex align-items-satrt gap-2 ">
                                    {el.items.length} item(s){" / "}
                                    <Button
                                        onClick={() => ViewDetailsHandler(el.id)}
                                        style={{ cursor: "pointer" }}
                                        variant="success"
                                        size="sm"
                                        className="btn-sm-text"
                                    >
                                        Product Details
                                    </Button>
                                    <Button
                                        onClick={() => dispatch(actRemoveOrder(el.id))}
                                        style={{ cursor: "pointer",}}
                                        variant="danger"
                                        size="sm"
                                        className="btn-sm-text"
                                    >
                                        Remove Order
                                    </Button>
                                </td>
                                <td>{el.subtotal.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {OrderList.length > 0 && (
                    <Button variant="danger" onClick={() => dispatch(actClearOrders())}>
                        ClearAll
                    </Button>
                )}
            </Loading>
        </>
    );
};

export default Orders;
