import { MutationTree } from "vuex";
import { ProductsState } from "../types/types";

export enum MutationTypes {
    SET_PRODUCTS = 'SET_PRODUCTS'
} 

export type Mutations = {
    [MutationTypes.SET_PRODUCTS](state: ProductsState, payload: []): void
}

export const mutations: MutationTree<ProductsState> & Mutations = {
    [MutationTypes.SET_PRODUCTS](state, products) {
        state.products = products
    }
}