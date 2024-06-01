
import * as campersApi from "../../api/campers-api"

import {fetchCampersLoading, fetchCampersSuccess,fetchCampersError} from "./campers-slice"


export const fetchCars=()=>{
    const func = async (dispatch)=>{
        try {
            dispatch(fetchCampersLoading())
            const data = await campersApi.requestCampers()
            dispatch (fetchCampersSuccess(data))
        }
        catch(error){
            dispatch (fetchCampersError(error.massager))

        }
    }
    return func
}