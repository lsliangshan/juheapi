import { ApipilotRequest } from "../utils/axios";

/**
 * 按更新时间查询笑话
 * 
 * 根据时间戳返回该时间点前或后的笑话列表
 * 
 * @param {Object} params   
 * @property {String} params.sort - desc:指定时间之前发布的，asc:指定时间之后发布的
 * @property {String} params.time - 时间戳（10位）
 * @property {String} [params.page=1] - 当前页数,默认1,最大20
 * @property {String} [params.pageSize=20] - 每次返回条数,默认1,最大20
 * @property {String} params.key  
 *
 * @returns {Object} returnValue   
 * @returns {String} returnValue.reason  
 * @returns {Object} returnValue.result  
 * @returns {Array<Object>} returnValue.result.data[]  
 * @returns {String} returnValue.result.data[].content  
 * @returns {String} returnValue.result.data[].hashId  
 * @returns {Number} returnValue.result.data[].unixtime  
 * @returns {String} returnValue.result.data[].updatetime  
 * @returns {Number} returnValue.error_code  
 */
export function listJokeContent(params: {
  /**
   * Request Data
   */
  data: {
  /**
   * @property {String} - desc:指定时间之前发布的，asc:指定时间之后发布的
   */
  sort: String;
  /**
   * @property {String} - 时间戳（10位）
   */
  time: String;
  /**
   * @property {String=1} - 当前页数,默认1,最大20
   */
  page?: String;
  /**
   * @property {String=20} - 每次返回条数,默认1,最大20
   */
  pageSize?: String;
  /**
   * @property {String}  
   */
  key: String;
},
  /**
   * Request Headers
   */
  headers?: {
}
}) {
  return new Promise(async (resolve) => {
    const apipilotRequest: ApipilotRequest = ApipilotRequest.getInstance();
    const defaultParams: any = {};
		defaultParams["page"] = "1";

		defaultParams["pageSize"] = "20";

    const newParams = {...defaultParams, ...(params?.data || {})};
    
    const defaultHeaders: any = {};
    const newHeaders = {...defaultHeaders, ...(params?.headers || {})};
    
    await apipilotRequest
      .get("http://v.juhe.cn/joke/content/list", newParams, {
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
