export const QUERY_URL =
  process.env.NODE_ENV === "development"
    ? "https://www.trackntrace.network/query/api"
    : "http://localhost:8001/api";
export const PUBLISH_URL =
  process.env.NODE_ENV === "development"
    ? "https://www.trackntrace.network/publish/api"
    : "http://localhost:8000/api";
