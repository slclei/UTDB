import http from "../http-common";
import WellData from "../types/Wells";

const getAll =()=>{
    return http.get<Array<WellData>>("/boreholes");
};

const getAPI =(api: Number)=>{
    return http.get<Array<WellData>>(`/boreholes/${api}`);
};

const findByName =(name: String)=>{
    return http.get<Array<WellData>>(`/boreholes?wellName=${name}`);
};

const WellService = {
    getAll,
    getAPI,
    findByName,
};

export default WellService;