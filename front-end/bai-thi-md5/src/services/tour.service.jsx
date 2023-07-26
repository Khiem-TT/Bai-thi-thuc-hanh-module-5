import axios from "axios";

export default class TourService {
    static async getAllTours() {
        return await axios.get('http://localhost:3000/tuors');
    }

    static async getOneTour(id) {
        return await axios.get('http://localhost:3000/tuors/' + id);
    }

    static async addTour(data) {
        return await axios.post('http://localhost:3000/tuors', data);
    }

    static async deleteTour(id) {
        return await axios.delete('http://localhost:3000/tuors/' + id);
    }

    static async editTour(id, data) {
        return await axios.put('http://localhost:3000/tuors/' + id, data);
    }
}