import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
// Skeleton Loading
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";

import TableSkeleton from "../skeletons/TableSkeleton/TableSkeleton";

// lottiehandler
import LottieHandler from "../LottieHandler/LottieHandler";



import { TLoading } from "@customTypes/Shared"



const skeletonTypes = {
    category: CategorySkeleton,
    product: ProductSkeleton,
    cart: CartSkeleton,
    table: TableSkeleton,
};

type TLaodingProps = {
    loading: TLoading;
    error: null | string;
    children: React.ReactNode;
    // the main is component but the ReactNode is a universal can  [array , object ] but
    // Jsx.element is component jsx only 

    type?: keyof typeof skeletonTypes;
    // type skeletonTypes = {
    //   category: CategorySkeleton,
    //   product: ProductSkeleton,
    //   cart: CartSkeleton,}
    // ==> Keyof category | product |  cart  
};


const Loading = ({ loading, error, children, type = "category" }: TLaodingProps) => {

    const Component = skeletonTypes[type]

    if (loading === "pending") {
        return <Component />
    }

    if (loading === "failed") {
        return <div>
            <LottieHandler type="Error" message={error as string} style={{width: "400px"}}/>
        </div>
    }

    return (
        <>
            {children}
        </>
    )
}

export default Loading;
