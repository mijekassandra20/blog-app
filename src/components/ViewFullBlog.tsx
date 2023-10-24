import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
    DialogContent,
    Typography,
    Divider,
    Grid,
} from "@mui/material";
import { Blog } from "../states/stateSlice";
import EditBlog from "./EditBlog";

type ViewFullBlogType = {
    open: boolean;
    onClose: () => void;
    currentBlog: Blog | null;
    setCurrentBlog: (arg0: Blog) => void;
    disagreeText: string;
    handleCloseViewFull: () => void;
};

const ViewFullBlog: React.FC<ViewFullBlogType> = ({
    open,
    onClose,
    currentBlog,
    setCurrentBlog,
    disagreeText,
    handleCloseViewFull,
}) => {
    const [openEdit, setOpenEdit] = useState<boolean>(false);

    const handleEditView = () => {
        setOpenEdit(true);
    };

    const handlEditClose = () => {
        setOpenEdit(false);
    };

    return (
        <>
            {openEdit ? (
                <EditBlog
                    open={openEdit}
                    handleEditClose={handlEditClose}
                    currentBlog={currentBlog}
                    setCurrentBlog={setCurrentBlog}
                />
            ) : (
                <Dialog
                    open={open}
                    onClose={onClose}
                    keepMounted
                    aria-describedby="alert-dialog-slide-description"
                >
                    <Grid container sx={{ alignItems: "start" }}>
                        <Grid item xs={10}>
                            <DialogTitle>{currentBlog?.title}</DialogTitle>
                        </Grid>
                        <Grid item xs={2}>
                            <Button sx={{ my: 1.5 }} onClick={handleEditView}>
                                Edit
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mx: 4, mb: 1 }}></Divider>
                    <DialogContent
                        sx={{
                            height: "30vh",
                            overflowY: "auto",
                            display: "grid",
                            px: 4,
                        }}
                    >
                        <Typography paragraph>{currentBlog?.description}</Typography>
                    </DialogContent>
                    <Divider sx={{ mx: 4, mt: 1 }}></Divider>

                    <DialogContent sx={{ px: 4, display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body1">
                            <span style={{ fontWeight: "bold" }}>Author: </span>{" "}
                            {currentBlog?.author}
                        </Typography>
                        <Typography variant="body1">
                            <span style={{ fontWeight: "bold" }}>Date: </span>
                            {currentBlog?.date}
                        </Typography>
                    </DialogContent>
                    <DialogActions sx={{ paddingInline: 3 }}>
                        <Button onClick={handleCloseViewFull}>{disagreeText}</Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
};

export default ViewFullBlog;
