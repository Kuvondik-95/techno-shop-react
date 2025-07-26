import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../libs/types/screen";

const initialState: ProductsPageState = {
  owner: null,
  chosenProduct: null,
  products: []
}

const productsPageSlice = createSlice({
    name: "productsPage",
    initialState,
    reducers: {
      setOwner: (state, action) => {
        state.owner = action.payload
      },
      setChosenProduct: (state, action) => {
        state.chosenProduct = action.payload
      },
      setProducts: (state, action) => {
        state.products = action.payload
      },
    }
  });

  export const { setOwner, setChosenProduct, setProducts } = productsPageSlice.actions;

  const ProductsPageReducer = productsPageSlice.reducer;
  export default ProductsPageReducer;