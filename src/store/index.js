import { createStore } from 'vuex'

export default createStore({
  state: {
    // toggle eye content
    eyeToggle : false,
    eyeToggle1 : false,

    // toggle password and text input
    passwordFieldType: "password",
    passwordFieldType1: "password",

  },
  getters: {
    eyeToggle : ( state ) => state.eyeToggle,
    eyeToggle1 : ( state ) => state.eyeToggle1,

    passwordFieldType : (state) => state.passwordFieldType,
    passwordFieldType1 : (state) => state.passwordFieldType1
  },
  mutations: {

    // show password function 
    switchVisibility(state){
        state.passwordFieldType = state.passwordFieldType === "password" ? "text" : "password";
        state.eyeToggle = !state.eyeToggle
    },

    // show password function 
    switchVisibility1(state){
      state.passwordFieldType1 = state.passwordFieldType1 === "password" ? "text" : "password";
      state.eyeToggle1 = !state.eyeToggle1
  },

  },
  actions: {
  },
  modules: {
  }
})
