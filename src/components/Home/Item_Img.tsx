import { Col } from "react-bootstrap"
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
const { link } = styles;

type Item_Type = {
    id?: number;
    img?: string;
    title: string;
    price?: number;
    Link_Item?: string | null;
}

const Item_Img = ({ img, title, price, Link_Item }: Item_Type) => {
    return (
        <>
            <Col sm={6} md={4} lg={3}>
                <Link to={Link_Item ?? "/"} className={link} >
                    <img src={img} alt="img_1" className="img-fluid Home_img" />
                    <p className="fw-bold mt-2">{title}</p>
                    <p style={{ marginTop: "-10px" }}>${price ? price.toFixed(2) : "nan" }</p>
                </Link>
            </Col>
        </>
    )
}

export default Item_Img