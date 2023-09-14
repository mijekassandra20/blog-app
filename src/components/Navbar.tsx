// import React from "react";

// mui imports
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";

// file imports
import "../css/index.css";
import { useState } from "react";
import AddBlog from "./AddBlog";

const Navbar = () => {
    const [openModalAdd, setOpenModalAdd] = useState<boolean>(false);

    const handleOpenModal = () => {
        setOpenModalAdd(true);
    };

    const handleCloseModal = () => {
        setOpenModalAdd(false);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        ></IconButton>
                        <Box sx={{ display: "flex", gap: 5 }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Blogs
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                                onClick={handleOpenModal}
                            >
                                Add Blog
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {openModalAdd && (
                <AddBlog
                    open={openModalAdd}
                    onClose={handleOpenModal}
                    disagreeText="Cancel"
                    agreeText="Submit"
                    handleCloseModal={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Navbar;
