// import { useState } from 'react'

// import components
import Navbar from "./components/Navbar";
import AllBlogs from "./components/AllBlogs";
import { Box, Typography } from "@mui/material";

// file imports
import "./css/index.css";

function App() {
    return (
        <>
            <div className="banner-style">
                <Navbar />
                <Box sx={{ p: 5, gap: 1, textAlign: "center" }}>
                    <Typography variant="h3" color="white">
                        Blogaroo
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        Where Wit Meets the Web
                    </Typography>
                </Box>
            </div>
            <AllBlogs />
        </>
    );
}

export default App;
