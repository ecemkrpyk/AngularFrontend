import { ResponseModel } from "./responseModel";

export interface ListResponseModel <T> extends ResponseModel{ //GENERİC YAPTIK
   
    data: T[];
}