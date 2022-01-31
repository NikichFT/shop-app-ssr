import { ActionContext, ActionTree } from "vuex";
import { ProductsState, RootState } from "../types/types";
import { Mutations, MutationTypes } from "./mutations";
import { getProducts } from "@/service/getProducts";

export enum ActionTypes {
    GET_PRODUCTS='GET_PRODUCTS'
}

type AgumentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<ProductsState, RootState>, "commit">

export interface Actions {
    [ActionTypes.GET_PRODUCTS](
        {commit}: AgumentedActionContext,
        payload: any
    ): Promise<void>
}

export const actions: ActionTree<ProductsState, RootState> & Actions = {
        async [ActionTypes.GET_PRODUCTS]({commit}, {query, url}): Promise<void>{
            await getProducts(url, query)
            .then(res => {
                console.log(res.searchResults[1].results)
            commit(MutationTypes.SET_PRODUCTS, res.searchResults[1].results)
        }) 
    }
    
}