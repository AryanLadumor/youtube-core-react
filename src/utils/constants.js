
//images present in Header
export const HAMBURGER_MENU_ICON = "https://tse3.mm.bing.net/th/id/OIP.F7reOP_-iZbvvQMHFXwECwHaHa?pid=Api&P=0&h=180";
export const YOUTUBE_LOGO = "https://tse1.mm.bing.net/th/id/OIP.sCtdNjphAin-gugu0MNptAHaEK?pid=Api&P=0&h=180"
export const SEARCH_ICON = "https://tse2.mm.bing.net/th/id/OIP.vyhkMafwzVBCCSsgGJfI4wHaHa?pid=Api&P=0&h=180"
export const DEFAULT_USER_ICON = "https://tse2.mm.bing.net/th/id/OIP.mb-TeazydHy54flygpdclwHaHa?pid=Api&P=0&h=180"

//All Icon Present in SideBar
export const HOME_ICON = "https://cdn-icons-png.flaticon.com/128/69/69524.png"
export const SHORT_ICON = "https://tse4.mm.bing.net/th/id/OIP.bKMhHEmne2DAz1BjpmWi0gHaHa?pid=Api&P=0&h=180"
export const VIDEO_ICON = "https://tse3.mm.bing.net/th/id/OIP.sK4WJBFCR_U7VRx0mU-WxQHaHa?pid=Api&P=0&h=180"
export const MUSIC_ICON = "https://tse1.mm.bing.net/th/id/OIP.zAz5Alw6ViaMCeqn5QNO0gHaHa?pid=Api&P=0&h=180"

//Youtube Vidios API
const MY_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&forMine=true&maxResults=25&q=fun&type=video&key=[${process.env.REACT_APP_GOOGLE_API_KEY}] HTTP/1.1`