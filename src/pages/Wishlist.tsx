import useWishlist from "@hooks/useWishlist";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";


const Wishlist = () => {
    const {loading, error , records } = useWishlist();

    return (
        <div>
            <Heading title={`Your Wishlist `} /> 
            <Loading loading={loading} error={error} type="product">
            <GridList
                    emptyMessage="your wishlists is empty!"
                    records={records}
                    // this is A call back Func in iteration -> called = "Render Props Pattern" 
                    renderItem={(record) =>  <Product {...record} /> } 
                />
            </Loading>
        </div>
    )
}

export default Wishlist;
