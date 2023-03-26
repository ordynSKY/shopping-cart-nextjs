import "@/styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import cartReducer, { getTotal } from "@/slices/cartSlice";
import { watcherSaga } from "@/saga/sagas";
import productsReducer from "@/slices/productsSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

store.dispatch(getTotal(null));

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
