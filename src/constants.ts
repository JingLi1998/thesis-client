const IS_DEV = process.env.NODE_ENV === "development";
export const QUERY_URL = IS_DEV
  ? "http://localhost:8001/api"
  : "https://www.trackntrace.network/query/api";
export const PUBLISH_URL = IS_DEV
  ? "http://localhost:8000/api"
  : "https://www.trackntrace.network/publish/api";
// export const AUTH_URL = IS_DEV
//   ? "/api"
//   : "https://www.trackntrace.network/auth/api";
export const AUTH_URL = "https://www.trackntrace.network/auth/api";
export const JSON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
