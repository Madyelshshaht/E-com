import { Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CartSkeleton = () => {
    const rendderSkeletons = Array(3).fill(0).map((_, index) => (
        <div key={index}>
            <ContentLoader
                speed={2}
                width={300}
                height={200}
                viewBox="0 0 300 200"
                backgroundColor="#dedede"
                foregroundColor="#fafafa"
            >
                <rect x="7" y="15" rx="0" ry="0" width="150" height="180" />
                <rect x="165" y="15" rx="0" ry="0" width="128" height="9" />
                <rect x="165" y="45" rx="0" ry="0" width="77" height="6" />
                <rect x="165" y="156" rx="5" ry="5" width="116" height="34" />
            </ContentLoader>
        </div>
    ))
    return<Row> {rendderSkeletons} </Row>
    


}

export default CartSkeleton
