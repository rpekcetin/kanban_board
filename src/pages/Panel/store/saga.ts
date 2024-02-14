import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { application } from '../../../redux/store';
import { PanelActionTypes, PanelTypes } from './types';
import { toast } from 'react-hot-toast';
import { deletePanels, getPanels, postPanels, updateLoaded } from './slice';
import { IDeletePanelPayload, INewPanelPayload, IPanel } from '../types/types';

function* getPanelsHandler() {
    try {
        yield put(updateLoaded(false))
        const response: AxiosResponse<IPanel[]> = yield call(() =>
            axios.get(`${application.api}/panel`)
        );
        yield put(getPanels(response.data));
        yield put(updateLoaded(true))
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            const message = error.response?.data.message || 'Bilinmeyen Bir Hata ile Karşılaşıldı !';
            toast.error(message);
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
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            const message = error.response?.data.message || 'Bilinmeyen Bir Hata ile Karşılaşıldı !';
            toast.error(message);
        } else {
            toast.error('Bilinmeyen Bir Hata ile Karşılaşıldı !');
        }
    }
}


function* deletePanelsHandler(action: IDeletePanelPayload) {
    try {
        yield call(axios.delete, `${application.api}/panel/delete/${action?.payload?._id}`);
        yield put(deletePanels({ _id: action.payload._id }))
        toast.success('Panel Başarılı Bir Şekilde Silindi')
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            const message = error.response?.data.message || 'Bilinmeyen Bir Hata ile Karşılaşıldı !';
            toast.error(message);
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