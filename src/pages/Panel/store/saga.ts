import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
//import { Task } from './path/to/your/models'; // Task modelinizin gerçek yolu
import { application } from '../../../redux/store';
import { PanelTypes } from './types';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getPanels } from './slice';

function* getPanelsHandler({ payload }: any) {
    try {
        const response: AxiosResponse<{ data: any[] }> = yield call(() =>
            axios.get(`${application.api}/tasks`)
        );

        yield put(getPanels(response.data.data));
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}

function* createPanelsHandler({ payload }: any) {
    try {
        const response: AxiosResponse = yield call(axios.post, 'YOUR_BACKEND_ENDPOINT', { payload });
        //yield put(updateTasksMove(newCategories));
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}


function* updatePanelsHandler({ payload }: any) {
    try {
        const response: AxiosResponse = yield call(axios.put, 'YOUR_BACKEND_ENDPOINT', { payload });
        //yield put(updateTasksMove(newCategories));
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}

export function* PanelSagas() {
    yield all([
        takeEvery(
            PanelTypes.GET_PANELS, getPanelsHandler
        ),
        takeEvery(
            PanelTypes.POST_PANELS, createPanelsHandler
        ),
        takeEvery(
            PanelTypes.DELETE_PANELS, updatePanelsHandler
        )
    ])
}