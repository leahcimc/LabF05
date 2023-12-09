import axios from "axios"
import { Welcome } from "../data/CarParkInfoData"


export function fetchCarParkInfo(getCarParkInfo: (data: Welcome) => void){
   axios.get<Welcome>(`https://api.data.gov.hk/v1/carpark-info-vacancy`)
        .then((response) => {
            getCarParkInfo(response.data);
        })
}