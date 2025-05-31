import { TCategory } from "@customTypes/category";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle , link } = styles;


const Category = ({ title, img, prefix }: TCategory) => {
    return (
        <Link to={`/categories/products/${prefix}`} className={link}>
            <div className={category}>
                <div className={categoryImg}>
                    <img
                        src={img}
                        alt={title}
                    />
                </div>
                <h4 className={categoryTitle}>{title}</h4>
            </div>
        </Link>
    );
};

export default Category;