
import { Developer } from '../models/developer.model';
import axios, { AxiosPromise } from 'axios';

// https://alligator.io/vuejs/rest-api-axios/

export class DevsService {

    constructor() {
        console.log("Devs service");
    }

    public test(): string {
        return "ok";
    }

    public getDevs(): AxiosPromise<Developer[]> {
        return axios.get('/api/devs');
    }

    public update(dev: Developer): AxiosPromise<Developer> {
        console.log(dev);
        return axios.post('/api/devs/save', dev);
    }

    public getDetails(id: string): AxiosPromise<Developer> {
        return axios.get('/api/devs/details?id=' + id);
    }

}


