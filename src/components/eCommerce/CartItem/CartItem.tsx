//[useMemo] to optimize performance with caching [id , title , price, max, quantity] != but the changeQuantityHandler method is rernder with every state change then use useCallback in the method in Cart component
import { memo } from "react";

// Bootstrap
import { Form, Button } from "react-bootstrap";

// component 
import ProductInfo from "../ProductInfo/ProductInfo";


//Type 
import { TProduct } from "@customTypes/product";

// Styles
import styles from "./styles.module.css";

const { cartItem , cartItemSelection } = styles;


type CartItemProp = TProduct & {
    changeQuantityHandler: (id: number, quantity: number) => void;
    RemoveItemHandler: (id: number) => void;
};

const CartItem = memo(({ id, title, img, price, max, quantity, changeQuantityHandler, RemoveItemHandler }: CartItemProp) => {

    // Create Array with the number of (max)  using the [index] because values is [fill 0]
    const renderOption = Array(max).fill(0).map((_, idx) => {
        const quantityMax = ++idx;
        return (<option value={quantityMax} key={quantityMax}>{quantityMax}</option>);
    });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const quantity = +event.target.value;
        changeQuantityHandler(id, quantity)
    };

    const RemoveItem = () => {
        RemoveItemHandler(id)
    }



    return (
        <div className={cartItem}>

            <ProductInfo title={title} img={img} price={price} direction="column">
                <Button
                    variant="secondary"
                    style={{ color: "white", width: "100px" }}
                    className="mt-auto"
                    onClick={RemoveItem}
                >
                    Remove
                </Button>
            </ProductInfo>

            <div className={cartItemSelection}>
                <span className="d-block mb-1">Quantity</span>
                <Form.Select value={quantity} onChange={changeQuantity}>
                    {renderOption}
                </Form.Select>
            </div>
        </div>
    );

});


export default CartItem
