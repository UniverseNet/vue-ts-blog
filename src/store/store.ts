import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
// import moduleB from "@/store/moduleB";

Vue.use(Vuex)

export interface RootState {
  category: string;

}

const store: StoreOptions<RootState>={
  state:{
    category: 'beginner',
  },
  mutations: {
    setCategory(state, category: string){
      state.category = category;
      console.log(category);
    },

  },
  actions: {
    setRootData({commit}, category: string) {
      commit('setCategory', category);
    }
  },
  modules: {
    // moduleB,
  },
  getters:{
    category: (state) => state.category,
  },

}
export default new Vuex.Store(store);

