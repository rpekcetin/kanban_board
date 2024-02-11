import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
//import { Task } from './path/to/your/models'; // Task modelinizin gerçek yolu
import { application } from '../../../redux/store';
import { HomeTypes } from './types';
import { toast } from 'react-hot-toast';
import { getTasks, updateTasks, updateTasksMove } from './slice';
import { useSelector } from 'react-redux';

function* getTasksHandler({ payload }: any) {
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

function* updateTaskHandler({ payload }: any) {
    try {
        const categories: any[] = yield select(state => state.HomeSlice.tasks);
        const newCategories: any = JSON.parse(JSON.stringify(categories));
        const fromCategoryIndex = newCategories.findIndex((category: any) => category.id === payload.fromCategoryId);
        const toCategoryIndex = newCategories.findIndex((category: any) => category.id === payload.toCategoryId);
        const fromCategory = newCategories[fromCategoryIndex];
        const toCategory = newCategories[toCategoryIndex];

        if (fromCategory && toCategory) {
            const taskMoving = fromCategory.data.splice(payload.fromIndex, 1)[0];
            toCategory.data.splice(payload.toIndex, 0, taskMoving);
            [fromCategory, toCategory].forEach(category => {
                category.data.forEach((task: any, index: any) => {
                    task.position = index + 1;
                });
            });
        }
        //const response: AxiosResponse = yield call(axios.put, 'YOUR_BACKEND_ENDPOINT', { payload, toCategory: [...newCategories?.filter((el: any) => el.id === payload.toCategoryId) ?? null], fromCategory: [...newCategories?.filter((el: any) => el.id === payload.fromCategoryId) ?? null] });
        yield put(updateTasksMove(newCategories));
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
        ),
        takeEvery(
            HomeTypes.UPDATE_TASKS, updateTaskHandler
        )
    ])
}