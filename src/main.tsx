import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./app/store.tsx";
import { Provider } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material";

const typographyTheme = createTheme({
    typography: {
        fontFamily: "Poppins",

        h3: {
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: 18,
            fontWeight: 400,
        },
        subtitle2: {
            fontSize: 24,
            fontWeight: 500,
        },
        body1: {
            fontSize: 14,
            fontWeight: 400,
        },
        body2: {
            fontSize: 16,
            fontWeight: 400,
        },
        caption: {
            fontSize: 16,
            fontWeight: 500,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={typographyTheme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
