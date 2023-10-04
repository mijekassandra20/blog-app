import React from "react";
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

type ViewFullBlogType = {
    open: boolean;
    onClose: () => void;
    currentBlog: Blog | null;
    disagreeText: string;
    handleCloseViewFull: () => void;
};

const ViewFullBlog: React.FC<ViewFullBlogType> = ({
    open,
    onClose,
    currentBlog,
    disagreeText,
    handleCloseViewFull,
}) => {
    return (
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
                    <Button sx={{ my: 1.5 }}>Edit</Button>
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
                    <span style={{ fontWeight: "bold" }}>Author: </span> {currentBlog?.author}
                </Typography>
                <Typography variant="body1">
                    <span style={{ fontWeight: "bold" }}>Date: </span>
                    {currentBlog?.date}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseViewFull}>{disagreeText}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ViewFullBlog;
