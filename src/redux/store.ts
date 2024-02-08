import { configureStore } from "@reduxjs/toolkit";
import reducers from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga)

export const application = {
  api: "https://api.example.com",
};
