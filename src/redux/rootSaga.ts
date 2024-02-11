import { all } from 'redux-saga/effects'
import { HomeSagas } from '../pages/Home/store/saga'
import { PanelSagas } from '../pages/Panel/store/saga'

export function* rootSaga() {
    yield all([
        HomeSagas(),
        PanelSagas()
    ])
}
