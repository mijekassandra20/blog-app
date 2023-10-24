import {
    TextField,
    DialogActions,
    DialogContent,
    DialogTitle,
    Dialog,
    Button,
} from "@mui/material";
import { Blog } from "../states/stateSlice";

type EditBlogType = {
    open: boolean;
    handleEditClose: () => void;
    currentBlog: Blog | null;
    setCurrentBlog: (arg0: Blog) => void;
};

const EditBlog: React.FC<EditBlogType> = ({
    open,
    handleEditClose,
    currentBlog,
    setCurrentBlog,
}) => {
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     // Update the state based on the input field's name
    //     setCurrentBlog((prevBlog: Blog) => ({
    //         ...prevBlog,
    //         [name]: value,
    //     }));
    // };

    return (
        <Dialog
            open={open}
            onClose={handleEditClose}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            className="form-container"
        >
            <DialogTitle sx={{ fontWeight: "bold" }}>Edit Blog Post</DialogTitle>
            <form
            // onSubmit={handleSubmit(onSubmit)}
            >
                <DialogContent
                    sx={{ width: "500px", height: "60vh", overflowY: "auto", display: "GRID" }}
                >
                    <TextField
                        required
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        value={currentBlog?.title}

                        // {...register("title")}
                    />
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={8}
                        variant="outlined"
                        value={currentBlog?.description}

                        // {...register("description")}
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        label="Author"
                        variant="outlined"
                        value={currentBlog?.author}

                        // {...register("author")}
                    />

                    <DialogActions>
                        <Button onClick={handleEditClose}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </DialogContent>
            </form>
        </Dialog>
    );
};

export default EditBlog;
