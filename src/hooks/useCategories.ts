import { useEffect } from "react";
import { actGetCategories, CleanUpCategoriesRecords } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
const useCategories = () => {

    const dispatch = useAppDispatch();
    const { loading, error, records } = useAppSelector((state) => state.categories);

    useEffect(() => {
        const promise = dispatch(actGetCategories());
        return () => {
            dispatch(CleanUpCategoriesRecords())
            promise.abort();
        }
    }, [dispatch]);

    return { loading, error, records }
}

export default useCategories;
