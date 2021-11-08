import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { Actions } from './products/actions'
import { Getters } from './products/getters'
import { Mutations } from './products/mutations'
import { state } from './state'
import { RootState } from './types/types'
import { Products } from './products'

export const store = createStore({
  state,
  mutations: {

  },
  getters: {

  },
  actions: {

  },
  modules:{
    Products
  }
})

export type Store = Omit<
  VuexStore<RootState>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}