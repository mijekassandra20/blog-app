import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
    TextField,
    Autocomplete,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    DialogActions,
    DialogContent,
    DialogTitle,
    Dialog,
    Button,
} from "@mui/material";

// props type when opening the modal for adding blog
type AddBlogType = {
    open: boolean;
    onClose: () => void;
    agreeText: string;
    disagreeText: string;
    handleCloseModal: () => void;
};

type BlogInput = {
    title: string;
    description: string;
    author: string;
    date: string;
};

const AddBlog: React.FC<AddBlogType> = ({
    open,
    onClose,
    agreeText,
    disagreeText,
    handleCloseModal,
}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<BlogInput>();
    const onSubmit: SubmitHandler<BlogInput> = (data) => console.log(data);

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <Dialog
            open={open}
            onClose={onClose}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            className="form-container"
        >
            <DialogTitle sx={{ fontWeight: "bold" }}>Add Blog Post</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent
                    sx={{ width: "500px", height: "60vh", overflowY: "auto", display: "GRID" }}
                >
                    <TextField required id="outlined-basic" label="Title" variant="outlined" />
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={8}
                        variant="outlined"
                    />
                    <TextField required id="outlined-basic" label="Author" variant="outlined" />

                    <DialogActions>
                        <Button onClick={handleCloseModal}>{disagreeText}</Button>
                        <Button type="submit">{agreeText}</Button>
                    </DialogActions>
                </DialogContent>
            </form>
        </Dialog>
    );
};

export default AddBlog;
