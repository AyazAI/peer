import http from "./http-common";

class DataService {
  getAll() {
    return http.get("/chat");
  }

  get(id) {
    return http.get(`/chat/${id}`);
  }

  create(data) {
    return http.post("/chat", data);
  }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new DataService();