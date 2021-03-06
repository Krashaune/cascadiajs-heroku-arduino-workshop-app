export const apiUrl =
  process.env.NODE_ENV === "production"
    ? `${window.location.origin}/`
    : "http://localhost:3001/"

export const wsUrl = `ws${apiUrl.match(/^http(s?:\/\/.*)\/.*$/)[1]}`

export const OffAir = "Off air"
export const OnAir = "On air"
