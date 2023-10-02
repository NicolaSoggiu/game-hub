import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e5ac6db9bcc14705a2c81db7b32fd90f",
  },
});
