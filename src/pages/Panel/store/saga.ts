import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { application } from '../../../redux/store';
import { PanelActionTypes, PanelTypes } from './types';
import { toast } from 'react-hot-toast';
import { deletePanels, getPanels, postPanels, updateLoaded } from './slice';
import { INewPanelPayload } from '../types/types';

function* getPanelsHandler({ payload }: any) {
    try {
        yield put(updateLoaded(false))
        const response: AxiosResponse<{ data: any[] }> = yield call(() =>
            axios.get(`${application.api}/panel`)
        );
        yield put(getPanels(response.data));
        yield put(updateLoaded(true))
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}

function* createPanelsHandler(action: INewPanelPayload) {
    try {
        const response: AxiosResponse = yield call(axios.post, `${application.api}/panel/post`, { name: action.payload.name });
        toast.success('Yeni Panel Başarı ile Eklendi')
        yield put(postPanels(response.data));
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}


function* deletePanelsHandler(action: any) {
    try {
        const response: AxiosResponse = yield call(axios.delete, `${application.api}/panel/delete/${action?.payload?._id}`);
        yield put(deletePanels(action.payload._id));
        toast.success('Panel Başarılı Bir Şekilde Silindi')
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
            PanelTypes.GET_PANELS as PanelActionTypes, getPanelsHandler
        ),
        takeEvery(
            PanelTypes.POST_PANELS as PanelActionTypes, createPanelsHandler
        ),
        takeEvery(
            PanelTypes.DELETE_PANELS as PanelActionTypes, deletePanelsHandler
        )
    ])
}