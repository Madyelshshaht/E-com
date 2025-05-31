import useProducts from "@hooks/useProducts";
import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";

const Products = () => {
const {loading , error , productsFullInfo , ProductsPrefix} = useProducts(); // Destructuring


    return (
        <Container>
            <Heading title={` ${ProductsPrefix?.toUpperCase()}  Products`} /> 
            <Loading loading={loading} error={error} type="product">
            <GridList
                    emptyMessage="there are no products!"
                    records={productsFullInfo}
                    // this is A call back Func in iteration -> called = "Render Props Pattern" 
                    renderItem={(record) =>  <Product {...record} /> } 
                />
            </Loading>
        </Container>
    );
};

export default Products;
