import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../app/store";

// mui imports
import {
    Container,
    Typography,
    Box,
    Grid,
    Button,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const typographyTheme = createTheme({
    typography: {
        fontFamily: "Poppins",

        h3: {
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: 20,
            fontWeight: 400,
        },
        subtitle2: {
            fontSize: 24,
            fontWeight: 500,
        },
        body1: {
            fontSize: 14,
            fontWeight: 400,
        },
        caption: {
            fontSize: 16,
            fontWeight: 500,
        },
    },
});

const AllBlogs: React.FC = () => {
    const blogs = useSelector((state: IRootState) => state.blogSlice);

    return (
        <Container>
            <Box className="title-container">
                <ThemeProvider theme={typographyTheme}>
                    <Typography variant="h3" className="page-title">
                        Blog Post
                    </Typography>
                    <Typography variant="subtitle1" className="page-desc">
                        We use an agile approach to test assumptions and connect with the needs of
                        your audience early and often.
                    </Typography>
                </ThemeProvider>
            </Box>
            {/* <Box className="blog-card"></Box> */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Grid
                    className="grid-card-container"
                    sx={{ gap: 3 }}
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 2, sm: 8, md: 12 }}
                >
                    {blogs.map((blog) => (
                        <Box className="blog-card" key={blog.id} sx={{ flexGrow: 1 }}>
                            <ThemeProvider theme={typographyTheme}>
                                <Typography className="blog-title" variant="subtitle2">
                                    {blog.title}
                                </Typography>
                                <Typography className="blog-desc" variant="body1">
                                    {blog.description}
                                </Typography>
                                <Box className="blog-author-button">
                                    <Typography variant="caption">{blog.author}</Typography>
                                    <Button endIcon={<ArrowForward />} color="primary" size="small">
                                        Read more
                                    </Button>
                                </Box>
                            </ThemeProvider>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default AllBlogs;
