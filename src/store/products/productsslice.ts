import { createSlice } from "@reduxjs/toolkit";
import actGetProductsbyCatPrefix from "./act/actGetProductsbyCatPrefix";
import { TLoading } from "@customTypes/Shared";
import { TProduct } from "@customTypes/product";
import { isString } from "@customTypes/guard";

// Define a type for the slice state
// Type Safe for initialState
interface IProductstate {
  // {object of the type of  item in json-server} before [array] name --> Array of Object
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductstate = {
  records: [],
  loading: "idle",
  error: null,
};

const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //Action 
    CleanUpProductsRecords: (state) => {
      state.records = []; // claen the records
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsbyCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsbyCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsbyCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if(isString(action.payload)) {
        state.error = action.payload;
      }
      // state.error = action.payload as string; --> "Casting" this true also
    });
  },
});

export const { CleanUpProductsRecords } = productslice.actions;
export { actGetProductsbyCatPrefix };
export default productslice.reducer; 
