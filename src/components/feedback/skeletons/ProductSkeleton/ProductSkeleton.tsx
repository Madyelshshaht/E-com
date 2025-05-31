import ContentLoader from "react-content-loader";
import { Col, Row } from "react-bootstrap";

const ProductSkeleton = () => {

    const rendderSkeletons = Array(4)
        .fill(0)
        .map((_, index) => (
            <Col
                key={index}
                lg={3}
                md={4}
                xs={6}
                className="d-flex justify-content-center mb-5 mt-2"
            >
                <ContentLoader
                    speed={2}
                    width={160}
                    height={300}
                    viewBox="0 0 160 300"
                    backgroundColor="#dedede"
                    foregroundColor="#fafafa"
                >
                    <rect x="10" y="9" rx="0" ry="0" width="140" height="180" />
                    <rect x="10" y="197" rx="0" ry="0" width="141" height="6" />
                    <rect x="9" y="215" rx="0" ry="0" width="70" height="6" />
                    <rect x="9" y="231" rx="0" ry="0" width="100" height="4" />
                    <rect x="5" y="252" rx="10" ry="10" width="145" height="42" />
                </ContentLoader>
            </Col>
        ));
    return <Row>{rendderSkeletons}</Row>;
}

export default ProductSkeleton
