//
// SERVER
// export const SERVER_URL = "https://eltacafe.ru:8181"
export const SERVER_URL = "http://localhost:3099"
// export const SERVER_URL = "http://localhost:8181"

//
// ROUTES
export const sales = {
  DAILY_TOTALS_FOR_PERIOD: "/sales/daily-totals-for-period",
  DAY_ORG_SALES: "/sales/day/%(year)s-%(mon)s-%(day)s/org/%(orgId)s",
}


export const AUTH_SIGN_IN = "/auth/signin"

//
// HEADERS
export const HEADER_AUTHORIZATION = "Authorization"
