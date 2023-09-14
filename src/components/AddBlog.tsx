import React from "react";
import { useDispatch } from "react-redux";

import { useForm, SubmitHandler } from "react-hook-form";

import {
    TextField,
    DialogActions,
    DialogContent,
    DialogTitle,
    Dialog,
    Button,
} from "@mui/material";

import { addBlog } from "../states/stateSlice";

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
};

const AddBlog: React.FC<AddBlogType> = ({
    open,
    onClose,
    agreeText,
    disagreeText,
    handleCloseModal,
}) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<BlogInput>();

    const onSubmit: SubmitHandler<BlogInput> = (data) => {
        try {
            console.log(data);

            if (data) {
                dispatch(
                    addBlog({
                        id: Date.now(),
                        title: data.title,
                        description: data.description,
                        author: data.author,
                        date: new Date().toISOString(),
                    })
                );
                handleCloseModal();
            }
        } catch (error) {
            console.log(error);
        }
    };

    // blog state
    // const blogs = useSelector((state: IRootState) => state.blogSlice);

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
                    <TextField
                        required
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        {...register("title")}
                    />
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={8}
                        variant="outlined"
                        {...register("description")}
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        label="Author"
                        variant="outlined"
                        {...register("author")}
                    />

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
