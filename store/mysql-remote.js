import config from "../config.js";
import createRemoteDB from "./remote.js";

export default createRemoteDB(config.mysqlApi.host, config.mysqlApi.port);