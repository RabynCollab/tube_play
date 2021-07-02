import axios from "axios";
const KEY = "AIzaSyCSqzcJpWahoD6iVshA0nQjpQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
