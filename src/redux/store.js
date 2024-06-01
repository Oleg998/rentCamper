import { configureStore } from "@reduxjs/toolkit";


import campersReducer from "./camper/campers-slice"


const store= configureStore({
    reducer:{campers:campersReducer},
})

export default store;