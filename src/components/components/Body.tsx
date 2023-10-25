import { ReactNode } from "react";
import { Box } from "@mui/material";

const BlogContainer = (props: { children: ReactNode }) => {
    return <Box>{props.children}</Box>;
};

export default BlogContainer;
