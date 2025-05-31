import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";

//  Create Selector like usememo => createSelector Take two parametar
const GetCartTotlaQuantitySelector = createSelector( 
    (state: RootState) => state.cart.items, //para [1]
    (items) => { // para [2]
        const totalQuantity = Object.values(items).reduce((acc, current) => {
            return acc + current;
        }, 0);
        return totalQuantity;
    }
);


export { GetCartTotlaQuantitySelector } ;