import { useEffect, useState } from "react";
// import { useAppSelector } from "@store/hooks"
import Wishlist from "@assets/svg/wishlist.svg?react";

import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
const { Container, TotalNum, pumpAnimate, IconWrapper } = styles

const HeaderWishlist = () => {
    const navigate = useNavigate()
    const [isAnimate, setIsAnimate] = useState(false)
    const totalQuantity = useAppSelector(state => state.wishlist.itemsId);

    const quantityStyle = `${TotalNum} ${isAnimate && pumpAnimate}`

    useEffect(() => {
        if (!totalQuantity) {
            return;
        }
        setIsAnimate(true);

        const debounce = setTimeout(() => {
            setIsAnimate(false);
        }, 300);

        return () => clearTimeout(debounce);
    }, [totalQuantity])

    return (
        <div className={Container} onClick={() => navigate("/wishlist")}>
            <div className={IconWrapper}>
                <Wishlist title="Like icon" />
                {totalQuantity.length > 0 && (<div className={quantityStyle}>{totalQuantity.length} </div> )}
            </div>
            <h3>Wishlist</h3>
        </div>
    )
}

export default HeaderWishlist;
