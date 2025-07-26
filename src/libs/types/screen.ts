import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

/** HOMEPAGE **/
export interface HomePageState{
  popularProducts: Product[];
  newProducts: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE **/
export interface ProductsPageState{
  owner: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** ORDERS PAGE **/