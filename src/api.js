import axios from 'axios';

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})

// const api = axios.create({
//   baseURL: "http://localhost:8005/api/systemusers",
//   headers: {
//     "Accept": "application/json",
//     "Content-Type": "application/json"
//   }
// })

export default {
  getAll() {
    return api.get("");
  },
  getById(id) {
    return api.get("" + "/" + id);
  },
  post(body) {
    return api.post("", body);
  },
  put(param, body) {
    return api.put("" + "/" + param, body);
  },
  delete(param) {
    return api.delete("" + "/" + param);
  }
}