import { ApipilotRequest } from "../utils/axios";

/**
 * 每日简报
 * 
 * 每日新闻简报API接口，返回每天热点新闻简报.该接口的digest字段是一段概括性的新闻简介，适合用来做每日新闻简报分享等。
 * 
 * @param {Object} params   
 * @property {String} params.key  
 *
 * @returns {Object} returnValue   
 * @returns {String} returnValue.reason  
 * @returns {Object} returnValue.result  
 * @returns {Array<Object>} returnValue.result.list[]  
 * @returns {String} returnValue.result.list[].mtime  
 * @returns {String} returnValue.result.list[].title  
 * @returns {String} returnValue.result.list[].digest  
 * @returns {Number} returnValue.error_code  
 */
export function queryFapigxBulletin(params: {
  /**
   * Request Data
   */
  data: {
  /**
   * @property {String}  
   */
  key: String;
},
  /**
   * Request Headers
   */
  headers?: {
  /**
   * @property {String=} - Content-Type
   */
  'Content-Type'?: String;
}
}) {
  return new Promise(async (resolve) => {
    const apipilotRequest: ApipilotRequest = ApipilotRequest.getInstance();
    const defaultParams: any = {};
    const newParams = {...defaultParams, ...(params?.data || {})};
    
    const defaultHeaders: any = {};
		defaultHeaders["Content-Type"] = "application/x-www-form-urlencoded";

    const newHeaders = {...defaultHeaders, ...(params?.headers || {})};
    
    await apipilotRequest
      .get("http://apis.juhe.cn/fapigx/bulletin/query", newParams, {
        headers: newHeaders,
      })
      .then((res) => {
        if (res.status != 200) {
          resolve({
            code: res.status,
            message: res.statusText || "Failed",
          });
        } else {
          resolve({
            code: 200,
            data: res.data,
          });
        }
      })
      .catch((err) => {
        resolve({
          code: 1001,
          message: err.message,
        });
      });
  });
}
