import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectHomePage = ( state: AppRootState ) => state.homePage;

export const retrievePopularProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularProducts
);

export const retrieveNewProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newProducts
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);