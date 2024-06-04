import { configureStore } from "@reduxjs/toolkit";


import campersReducer from "./camper/campers-slice"
import filterSlice from "./filter/filer-slice"

const store= configureStore({
    reducer:{campers:campersReducer,
             filter:filterSlice
    },
})

export default store;