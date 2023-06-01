let baseURL = "";
if (process.env.NODE_ENV === "production") {
  //发布环境
  baseURL = "https://host/production/api";
} else if (process.env.NODE_ENV === "development") {
  //生产环境
  baseURL = "https://host/development/api";
} else if (process.env.NODE_ENV === "test") {
  //测试环境
  baseURL = "https://host/test/api";
}
const serverConfig = {
  baseURL: baseURL,
  useTokenAuthorization: true,
};
export default serverConfig;
