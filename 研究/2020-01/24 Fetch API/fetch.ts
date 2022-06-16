// 默认基础配置
const basicConfig = {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {},
};

const methodContentType = {
  GET: "application/x-www-form-urlencoded",
  POST: "application/json",
};

const api = async (url, config) => {
  const initConfig = {
    ...basicConfig,
    ...config,
  };

  initConfig.method = initConfig?.method?.toLocaleUpperCase();

  const contentType =
    methodContentType[initConfig?.method] || "application/x-www-form-urlencoded";

  initConfig.headers = {
    "Content-Type": contentType,
    ...initConfig.headers,
  };

  const res = fetch(url, initConfig);

  return res;
};

export default {
  api,
};
