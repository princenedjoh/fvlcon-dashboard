import theme from "@/app/styles/theme"

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export const shortMonthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
export const minimumwidth = 1024
export const standardMargin = 10
export const noTempalteRoutes_startsWith = ['/company-code', '/agreementpage', '/auth/login', '/auth/signup', '/auth/verification', '/auth/reset-password', '/auth/mfa', '/model/list-faces', '/model/video-analysis', '/printable/fvlconizationResult/', '/printable/video-fvlconization-result/']
export const noTempalteRoutes = ['*', '/']
export const API_URL =
  "https://aytoeoiiq6.execute-api.us-east-1.amazonaws.com/Prod/faces";
export const CHECK_FACE_URL =
  "https://aytoeoiiq6.execute-api.us-east-1.amazonaws.com/Prod/faces/check";