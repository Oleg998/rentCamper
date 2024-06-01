import axios  from "axios";

const carsInstance =axios.create({
    baseURL: "https://6658cafcde346625136a8321.mockapi.io/api/v1/car/"
})

export const requestCampers=async ()=>{
    const {data} = await carsInstance.get("/");
    return data 
}