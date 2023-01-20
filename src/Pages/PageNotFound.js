import Header from "../Elements/Header";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

const PageNotFoundBox = styled(Box)(() => ({
    background: '#E6E6E6',
    height: 60,
    lineHeight: '60px',
    width: 350,
    height: 150,
    borderRadius: 20,
}));

const PageNotFoundText = styled(Box)(() => ({
    textAlign: 'center',
    fontSize: "50px",
    color: "F#F#F#",
    height: 60,
    lineHeight: '100px',
}));

export default function PageNotFound() {
    return (
        <Container maxWidth='100%'>
            <Header />
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <Grid item>
                    <PageNotFoundBox>
                        <PageNotFoundText>
                        PAGE NOT FOUND
                        </PageNotFoundText>
                    </PageNotFoundBox>
                </Grid>
            </Grid>
        </Container>
    );
}