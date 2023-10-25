import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./app/store.tsx";
import { Provider } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material";

const typographyTheme = createTheme({
    typography: {
        fontFamily: ["Poppins", "Open Sans"].join(","),

        h2: {
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
            fontWeight: 500,
            fontFamily: "Open Sans",
        },
        body2: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 2,
        },
        caption: {
            fontSize: 14,
            fontWeight: 400,
        },
    },
    palette: {
        // text: {
        //     primary: "#FFFFFF",
        //     secondary: "#000000",
        // },
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
