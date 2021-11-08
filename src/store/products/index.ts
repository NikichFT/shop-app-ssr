import { Module } from "vuex";
import { RootState } from "../types/types";
import { ProductsState } from "../types/types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const state: ProductsState = {
    products: []
}

export const Products: Module<ProductsState, RootState> = {
    state,
    getters,
    mutations,
    actions
}