import { HeaderCounter } from "@components/eCommerce";


// Store
import { useAppSelector } from "@store/hooks";
import { GetCartTotlaQuantitySelector } from "@store/cart/selector";


// SvgIcon
import WishlistIcon from "@assets/svg/wishlist.svg?react";
import CartIcon from "@assets/svg/cart.svg?react";


//Styles 
import styles from "./styles.module.css";
const { headerLeftBar } = styles;

const HeaderLeftBar = () => {
    const wishlistTotalQuantity = useAppSelector(
        (state) => state.wishlist.itemsId.length
    );
    const cartTotalQuantity = useAppSelector(GetCartTotlaQuantitySelector);
    return (
        <div>
            <div className={headerLeftBar}>
                <HeaderCounter
                    title="Wishlist"
                    to="/wishlist"
                    svgIcon={<WishlistIcon title="wishlist" />}
                    totalQuantity={wishlistTotalQuantity}
                />
                <HeaderCounter
                    title="Cart"
                    to="/cart"
                    svgIcon={<CartIcon title="cart" />}
                    totalQuantity={cartTotalQuantity}
                />
            </div>
        </div>
    )
}

export default HeaderLeftBar;
