export const BASE_URL = "https://admin.itadvip.com/api";
// export const BASE_URL = "https://itadvip.com/admin.itadvip.com/api";

export const BASE_HEADERS = (headers) => {
  headers.set("Accept", "application/json");
  headers.set("locale", localStorage.getItem("i18nextLng") || "ar");
  return headers;
};
