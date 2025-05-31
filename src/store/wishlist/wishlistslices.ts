import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { authlogout } from "@store/auth/authSlice";
import { TLoading } from "@customTypes/Shared";
import { TProduct } from "@customTypes/product";


interface IwishlistState {
    itemsId: number[];
    productsFullInfo: TProduct[];
    error: null | string ;
    loading: TLoading
}

const initialState : IwishlistState= {
    itemsId: [], // to store id of items that user select ## and me accsses the item for his id ==? this is a perfect becasue any change after
    productsFullInfo: [],
    error: null,
    loading: "idle"
}


const wishlistSlices = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        cleanWishlistProductsFullInfo : (state) => {
            state.productsFullInfo = [];
        }
    },
    extraReducers: (builder) =>{

        //add && remove WishlistItems
        builder.addCase(actLikeToggle.pending, (state) => {
            state.error = null; 
        })
        builder.addCase(actLikeToggle.fulfilled, (state ,action) => {
            if(action.payload.type === "add"){
                state.itemsId.push(action.payload.id)
            }else{
                state.itemsId = state.itemsId.filter(el => el !== action.payload.id);
                state.productsFullInfo = state.productsFullInfo.filter(el => el.id !== action.payload.id);
            }
        })
        builder.addCase(actLikeToggle.rejected, (state , action) => {
            if(action.payload && typeof action.payload === "string"){
                state.error = action.payload;
            }
        });

        // GetWishlistItems
        builder.addCase(actGetWishlist.pending, (state) => {
            state.loading = "pending";
            state.error = null; 
        })
        builder.addCase(actGetWishlist.fulfilled, (state , action) => {
            state.loading = "succeeded";
            if(action.payload.dataType === "productsFullInfo"){
                state.productsFullInfo = action.payload.data as TProduct[];
            }else if(action.payload.dataType === "ProductIds"){
                state.itemsId = action.payload.data as number[];
            }
        })
        builder.addCase(actGetWishlist.rejected, (state ,action) => {
            state.loading = "failed";
            // if(isString(action.payload)) {
            if(action.payload && typeof action.payload === "string"){
                state.error = action.payload;
            }
        });

        // Logout
        builder.addCase(authlogout , state =>{
            state.itemsId = [];
            state.productsFullInfo = [];
        } )

    }
})

export { actLikeToggle  , actGetWishlist};
export const {cleanWishlistProductsFullInfo} = wishlistSlices.actions;
export default wishlistSlices.reducer;