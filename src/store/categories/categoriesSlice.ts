import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@customTypes/Shared";
import { TCategory } from "@customTypes/category";
import { isString } from "@customTypes/guard";
// Fetch 
import actGetCategories from "./act/actGetCategories";


// Define a type for the slice state
// Type Safe for initialState
interface ICategoriesState {
  records: TCategory[]; // {object of the type of  item in json-server} before [array] name --> Array of Object
  loading: TLoading
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    CleanUpCategoriesRecords : (state) => {
      state.records = [] ;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state ,action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state ,action) => {
      state.loading = "failed";
      if(isString(action.payload)) {
        state.error = action.payload;
      }
      // state.error = action.payload as string; --> "Casting" this true also
    });
  }
});

export const { CleanUpCategoriesRecords } = categoriesSlice.actions
export {actGetCategories} ;
export default categoriesSlice.reducer;


