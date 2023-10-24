import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../app/store";
import { Blog } from "../states/stateSlice";

// mui imports
import { Container, Typography, Paper, Box, Grid, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import ViewFullBlog from "./ViewFullBlog";

const AllBlogs: React.FC = () => {
    const blogs = useSelector((state: IRootState) => state.blogSlice);
    const [openViewFull, setOpenViewFull] = useState<boolean>(false);
    const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);

    const handleOpenViewFull = (blog: Blog) => {
        setCurrentBlog(blog);
        setOpenViewFull(true);
    };

    const handleCloseViewFull = () => {
        setOpenViewFull(false);
    };

    return (
        <Container sx={{ py: 2 }}>
            <Grid container spacing={4} sx={{ display: "flex" }}>
                {blogs.map((blog) => (
                    <Grid item key={blog.id} xs={12} sm={6} md={6} lg={4}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography
                                noWrap
                                variant="subtitle2"
                                sx={{ color: "text.primary", mb: 2 }}
                            >
                                {blog.title}
                            </Typography>
                            <Typography
                                paragraph
                                variant="body1"
                                sx={{
                                    color: "text.primary",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: "5",
                                    WebkitBoxOrient: "vertical",
                                }}
                            >
                                {blog.description}
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="caption" sx={{ color: "text.primary" }}>
                                    {blog.author}
                                </Typography>
                                <Button
                                    endIcon={<ArrowForward />}
                                    color="primary"
                                    size="small"
                                    onClick={() => handleOpenViewFull(blog)}
                                >
                                    Read more
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            {openViewFull && (
                <ViewFullBlog
                    open={openViewFull}
                    currentBlog={currentBlog}
                    setCurrentBlog={setCurrentBlog}
                    onClose={handleCloseViewFull}
                    disagreeText="Close"
                    handleCloseViewFull={handleCloseViewFull}
                />
            )}
        </Container>
    );
};

export default AllBlogs;
