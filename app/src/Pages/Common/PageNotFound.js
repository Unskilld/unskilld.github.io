import Header from "../../Elements/Header";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const PageNotFoundBox = styled(Box)(() => ({
    marginTop:15,
    background: '#E6E6E6',
    height: 60,
    lineHeight: '60px',
    width: 350,
    height: 100,
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
    const navigate = useNavigate()
    setTimeout(() => {
        navigate(-1)
    }, 1000)
    return (
        <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
    >
        <Grid item>
        <PageNotFoundBox>
            <PageNotFoundText>Page not found</PageNotFoundText>
        </PageNotFoundBox>
        </Grid>
        </Grid>
    );
}