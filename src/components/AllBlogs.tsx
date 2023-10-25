import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../app/store";
import { Blog } from "../states/stateSlice";

// mui imports
import {
    Container,
    Typography,
    Box,
    Grid,
    Button,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
} from "@mui/material";
import { ArrowForward, Height } from "@mui/icons-material";
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
                        <Card>
                            <CardActionArea className="card-style">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww"
                                    alt="blog cover"
                                />
                                <CardContent sx={{ p: 3, backgroundColor: "white" }}>
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
                                            height: 110,
                                        }}
                                    >
                                        {blog.description}
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography
                                            variant="caption"
                                            sx={{ color: "text.primary" }}
                                        >
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
                                </CardContent>
                            </CardActionArea>
                        </Card>
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
