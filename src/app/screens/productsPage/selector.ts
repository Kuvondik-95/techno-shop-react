import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectProductsPage = (state: AppRootState ) => state.productsPage;

export const retrieveOwner = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.owner 
);

export const retrieveChosenProduct = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.chosenProduct 
);
export const retrieveProducts = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.products 
);