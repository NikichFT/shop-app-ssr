import { GetterTree } from "vuex";
import { ProductsState, RootState } from "../types/types";

export type Getters = {
    PRODUCTS(state: ProductsState): any[]
}

export const getters: GetterTree<ProductsState, RootState> = {
    PRODUCTS(state) {
        return state.products
    }
}