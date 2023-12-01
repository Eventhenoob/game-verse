import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "078c7c1a588b40d6890e56947909c547",
  },
});
