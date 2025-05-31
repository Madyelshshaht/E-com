import { TProduct } from "@customTypes/product";
import CartItem from "../CartItem/CartItem";

type TCartItemListProps = {
    products: TProduct[];
    changeQuantityHandler: (id: number, quantity: number) => void; // [Void] Mean not return any thing ;
    RemoveItemHandler: (id:number) => void ;
};

const CartItemList = ({ products, changeQuantityHandler, RemoveItemHandler }: TCartItemListProps) => {

    const renderList = products.map((el) => (
        
        <CartItem
            key={el.id}
            {...el}
            changeQuantityHandler={ changeQuantityHandler }
            RemoveItemHandler={RemoveItemHandler}
        />
    ));

    return (
        <div>
            {renderList}
        </div>
    );
};

export default CartItemList;
