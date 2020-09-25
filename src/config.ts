enum Env {
    LOCAL = "LOCAL",
    UAT = "UAT",
    PROD = "PROD",
}
enum WebsiteUrl {
    LOCAL = "",
    UAT = "",
    PROD = "",
}
enum ApiUrl {
    LOCAL = "",
    PROD = "",
    UAT = "",
}
enum BaseImageUrl {
    LOCAL = "",
    UAT = "",
    PROD = "",
}
const processEnv = (process.env.REACT_APP_API_ENV === "PROD" || process.env.REACT_APP_API_ENV === "LOCAL") ? process.env.REACT_APP_API_ENV : "UAT";
const env: Env = Env[processEnv];
export const baseUrl = ApiUrl[env];
export const websiteUrl = WebsiteUrl[env];
export const baseImageUrl = BaseImageUrl[env];
