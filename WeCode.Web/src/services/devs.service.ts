
import { Developer } from '../models/developer.model';
import axios, { AxiosPromise } from 'axios';

// https://alligator.io/vuejs/rest-api-axios/

export class DevsService {

    constructor() { }

    public getDevs(): AxiosPromise<Developer[]> {
        return axios.get('/api/devs');
    }

    public update(dev: Developer): AxiosPromise<Developer> {
        return axios.post('/api/devs/save', dev);
    }

    public getDetails(id: string): AxiosPromise<Developer> {
        return axios.get('/api/devs/details?id=' + id);
    }

}


