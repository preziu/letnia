import http from "../http-common";

class BookingDataService {
    create(data) {
        return http.post("/bookings", data);
    }
    
    getAll() {
        return http.get("/bookings");
    }
}

export default new BookingDataService();
