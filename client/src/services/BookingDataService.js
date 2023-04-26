import http from "../http-common";

class BookingDataService {
    create(data) {
        return http.post("/bookings", data);
    }
    
    findAll() {
        return http.get("/bookings");
    }

    update(id, data) {
        return http.put(`/bookings/${id}`, data);
    }
}

export default new BookingDataService();
