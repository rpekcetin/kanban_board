import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
//import { Task } from './path/to/your/models'; // Task modelinizin gerçek yolu
import { application } from '../../../redux/store';
import { HomeTypes } from './types';
import { toast } from 'react-hot-toast';
import { getTasks } from './slice';

function* getTasksHandler() {
    try {
        const response: AxiosResponse<{ data: any[] }> = yield call(() =>
            axios.get(`${application.api}/tasks`)
        );
        yield put(getTasks(response.data.data));
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}

export function* HomeSagas() {
    yield all([
        takeEvery(
            HomeTypes.GET_TASKS, getTasksHandler
        )
    ])
}