import http from "../http-common";
import WellData from "../types/Wells";

const getAll =()=>{
    return http.get<Array<WellData>>("/boreholes");
};

const getAPI =(api: any)=>{
    return http.get<Array<WellData>>(`/api/${api}`);
};

const findByName =(name: String)=>{
    return http.get<Array<WellData>>(`/boreholes?wellName=${name}`);
};

const findMultiQueries =(query: String)=>{
    return http.get<Array<WellData>>(`/like?search=${query}`);
}

const WellService = {
    getAll,
    getAPI,
    findByName,
    findMultiQueries,
};

export default WellService;