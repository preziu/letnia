import http from "../http-common";

class OrderDataService {
    create(data) {
        return http.post("/orders", data);
    }
    
    findAll() {
        return http.get("/orders");
    }

    update(id, data) {
        return http.put(`/orders/${id}`, data);
    }

    delete(id) {
        return http.delete(`/orders/${id}`);
    }
}

export default new OrderDataService();
