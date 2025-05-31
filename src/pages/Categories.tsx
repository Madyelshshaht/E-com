import useCategories from "@hooks/useCategories";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";


const Categories = () => {
    const {loading , error , records } = useCategories();
    console.log(records)
    return (
        <>
            <Heading title={`Categories`} />
            <Loading loading={loading} error={error} type="category" >
                <GridList
                    emptyMessage="there are no Categories!"
                    records={records}
                    // this is A call back Func in iteration -> called = "Render Props Pattern" 
                    renderItem={(record) => <Category {...record} />}
                />
            </Loading>
        </>
    );
};

export default Categories;
