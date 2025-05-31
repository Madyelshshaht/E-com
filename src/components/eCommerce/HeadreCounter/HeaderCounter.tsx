import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./styles.module.css";
const { Container, TotalNum, pumpAnimate, IconWrapper } = styles;

type HeaderCounterProps = { totalQuantity: number; svgIcon: ReactNode, to: string ,title: string };

const HeaderCounter = ({ totalQuantity, svgIcon, to , title}: HeaderCounterProps) => {
    const navigate = useNavigate();
    const [isAnimate, setIsAnimate] = useState(false);

    const quantityStyle = `${TotalNum} ${isAnimate && pumpAnimate}`;

    useEffect(() => {
        if (!totalQuantity) {
            return;
        }
        setIsAnimate(true);

        const debounce = setTimeout(() => {
            setIsAnimate(false);
        }, 300);

        return () => clearTimeout(debounce);
    }, [totalQuantity]);

    return (
        <div className={Container} onClick={() => navigate(to)}>
            <div className={IconWrapper}>
                {svgIcon}
                {totalQuantity > 0 && (
                    <div className={quantityStyle}>{totalQuantity}</div>
                )}
            </div>
            <h3>{title}</h3>
        </div>
    );
};

export default HeaderCounter;
