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
        // yield put(updateTasksMove(payload));

        // const updatedCategories: any[] = yield select(state => state.HomeSlice.tasks);
        // const fromCategory: any = []
        // const toCategory: any = []
        // fromCategory.push(...updatedCategories.filter((el: any) => el.id === payload.fromCategoryId).map((dataCategory: any, index: number) => {
        //     return ({
        //         ...dataCategory,
        //         data: [
        //             ...dataCategory?.data?.map((dataTask: any, index: number) => {
        //                 return ({
        //                     ...dataTask,
        //                     position: index + 1
        //                 })
        //             }) ?? []
        //         ]
        //     })
        // }))
        // toCategory.push(...updatedCategories.filter((el: any) => el.id === payload.toCategoryId).map((dataCategory: any, index: number) => {
        //     return ({
        //         ...dataCategory,
        //         data: [
        //             ...dataCategory?.data?.map((dataTask: any, index: number) => {
        //                 return ({
        //                     ...dataTask,
        //                     position: index + 1
        //                 })
        //             }) ?? []
        //         ]
        //     })
        // }))
        // const response: AxiosResponse<{ data: any[] }> = yield call(() =>
        //     axios.put(`${application.api}/tasks`, { fromCategory, toCategory })
        // )
        // Mevcut state'den kategorileri al
        const categories: any[] = yield select(state => state.HomeSlice.tasks);

        // Derin kopya oluşturarak orijinal state'i koru
        const newCategories: any = JSON.parse(JSON.stringify(categories));

        // Kaynak ve hedef kategorileri bul
        const fromCategoryIndex = newCategories.findIndex((category: any) => category.id === payload.fromCategoryId);
        const toCategoryIndex = newCategories.findIndex((category: any) => category.id === payload.toCategoryId);
        const fromCategory = newCategories[fromCategoryIndex];
        const toCategory = newCategories[toCategoryIndex];

        // Kartı kaynaktan çıkar ve hedefe ekle
        if (fromCategory && toCategory) {
            const taskMoving = fromCategory.data.splice(payload.fromIndex, 1)[0];
            toCategory.data.splice(payload.toIndex, 0, taskMoving);

            // Her kategorideki kartların position değerlerini güncelle
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