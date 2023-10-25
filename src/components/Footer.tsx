import { Box, Typography, Grid, Divider } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ background: "#C4A484", mt: 2, py: 3, px: { xs: 4, sm: 4, lg: 10 } }}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        BLOGAROO
                    </Typography>
                    <Typography variant="caption">A Blog site: Where Wit Meets the Web</Typography>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        PRODUCT
                    </Typography>
                    <Typography variant="body2">Pricing</Typography>
                    <Typography variant="body2">FAQ</Typography>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        COMPANY
                    </Typography>
                    <Typography variant="body2">About</Typography>
                    <Typography variant="body2">Contact</Typography>
                    <Typography variant="body2">Blog</Typography>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        SOCIAL
                    </Typography>
                    <Typography variant="body2">Twitter</Typography>
                    <Typography variant="body2">Facebook</Typography>
                    <Typography variant="body2">Instagram</Typography>
                </Grid>
            </Grid>
            <Divider sx={{ my: 3 }} />

            <Grid xs={12} sx={{ textAlign: "center" }}>
                <Typography variant="caption">Copyright © 2023. All Rights Reserved.</Typography>
            </Grid>
        </Box>
    );
};

export default Footer;
