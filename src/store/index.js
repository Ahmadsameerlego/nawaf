import { createStore } from 'vuex'

export default createStore({
  state: {
    // toggle eye content
    eyeToggle : false,
    eyeToggle1 : false,
    eyeToggle2 : false,

    // toggle password and text input
    passwordFieldType: "password",
    passwordFieldType1: "password",
    passwordFieldType2: "password",

    categories : []

  },
  getters: {
    eyeToggle : ( state ) => state.eyeToggle,
    eyeToggle1 : ( state ) => state.eyeToggle1,
    eyeToggle2 : ( state ) => state.eyeToggle2,

    passwordFieldType : (state) => state.passwordFieldType,
    passwordFieldType1 : (state) => state.passwordFieldType1,
    passwordFieldType2 : (state) => state.passwordFieldType2,


    // getCategoryById: state => id => {
    //   return state.categories.find(category => category.id === id)
    // }

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

    // show password function 
    switchVisibility2(state){
      state.passwordFieldType2 = state.passwordFieldType2 === "password" ? "text" : "password";
      state.eyeToggle2 = !state.eyeToggle2
    },


  },
  actions: {
    
  },
  modules: {
  }
})
