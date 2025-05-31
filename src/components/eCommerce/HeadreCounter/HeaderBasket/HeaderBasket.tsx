import { useEffect, useState } from "react";
import { useAppSelector } from "@store/hooks"
import Logo from "../../../assets/svg/cart.svg?react"
import { GetCartTotlaQuantitySelector } from "@store/cart/cartSlice"

import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom";
const { Container, TotalNum, pumpAnimate, IconWrapper } = styles

const HeaderBasket = () => {
    const navigate = useNavigate()
    const [isAnimate, setIsAnimate] = useState(false)
    const totalQuantity = useAppSelector(GetCartTotlaQuantitySelector)

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
        <div className={Container} onClick={() => navigate("/cart")}>
            <div className={IconWrapper}>
                <Logo title="basket icon" />
                {totalQuantity > 0 && <div className={quantityStyle}>{totalQuantity}</div> }
            </div>
            <h3>Cart</h3>
        </div>
    )
}

export default HeaderBasket
