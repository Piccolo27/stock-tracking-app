import axios from "axios";

const TOKEN = "ceqnq6iad3i4iumt9bkgceqnq6iad3i4iumt9bl0";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
});
