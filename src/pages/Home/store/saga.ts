import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { application } from '../../../redux/store';
import { HomeActionTypes, HomeTypes } from './types';
import { toast } from 'react-hot-toast';
import { deleteTasks, getTasks, postTasks, updateTasksMove } from './slice';
import { IDeleteTasks, IGetTasks, IPostTasks, IUpdateMoveTasks } from '../types/types';

function* getTasksHandler(action: IGetTasks) {
    try {
        const response: AxiosResponse<{ data: any[] }> = yield call(() =>
            axios.get(`${application.api}/category/${action?.payload?.id}`)
        );
        yield put(getTasks(response.data));
        toast.success('Görevler Başarıyla Getirildi')
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}

function* createTasksHandler(action: IPostTasks) {
    try {
        const { title, panel_id, mission, categoryId, status, image, endDate, startDate, }: any = action.payload
        const form = new FormData()
        form.append('title', title)
        form.append('panel_id', panel_id)
        form.append('mission', mission)
        form.append('categoryId', categoryId)
        form.append('endDate', endDate)
        form.append('status', status)
        form.append('startDate', startDate)
        if (image) {
            form.append('image', image)
        }
        const response: AxiosResponse = yield call(axios.post, `${application.api}/task/post`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        yield put(postTasks(response.data));
        toast.success('Görevler Başarıyla Getirildi')
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}

function* updateTaskHandler(action: IUpdateMoveTasks) {
    try {
        const categories: any[] = yield select(state => state.HomeSlice.tasks);
        const newCategories: any = JSON.parse(JSON.stringify(categories));
        const fromCategoryIndex = newCategories.findIndex((category: any) => category.id === action.payload.fromCategoryId);
        const toCategoryIndex = newCategories.findIndex((category: any) => category.id === action.payload.toCategoryId);
        const fromCategory = newCategories[fromCategoryIndex];
        const toCategory = newCategories[toCategoryIndex];

        if (fromCategory && toCategory) {
            const taskMoving = fromCategory.data.splice(action.payload.fromIndex, 1)[0];
            taskMoving.categoryId = toCategory.id;
            toCategory.data.splice(action.payload.toIndex, 0, taskMoving);
            [fromCategory, toCategory].forEach(category => {
                category.data.forEach((task: any, index: any) => {
                    task.position = index + 1;
                });
            });
        }
        yield put(updateTasksMove(newCategories));
        const response: AxiosResponse = yield call(axios.put, `${application.api}/task/update`, { data: [...toCategory?.data ?? null, ...fromCategory?.data ?? null] })
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}

function* deleteTasksHandler(action: IDeleteTasks) {
    try {
        const response: AxiosResponse = yield call(axios.delete, `${application.api}/task/delete/${action?.payload?._id}`)
        yield put(deleteTasks(response.data));
        toast.success('Görev Başarıyla Silindi')
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
        takeEvery(HomeTypes.GET_TASKS as HomeActionTypes, getTasksHandler),
        takeEvery(HomeTypes.DELETE_TASKS as HomeActionTypes, deleteTasksHandler),
        takeEvery(HomeTypes.UPDATE_TASKS as HomeActionTypes, updateTaskHandler),
        takeEvery(HomeTypes.POST_TASKS as HomeActionTypes, createTasksHandler)
    ])
}