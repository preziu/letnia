import http from "../http-common";

class OrderDataService {
    create(data) {
        return http.post("/orders", data);
    }
    
    getAll() {
        return http.get("/orders");
    }
}

export default new OrderDataService();
