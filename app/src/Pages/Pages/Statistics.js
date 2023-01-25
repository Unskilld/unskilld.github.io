import { Box, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import StatisticsCard from "../../Elements/StatisticsCard";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(() => ({
    textAlign: 'center',
    fontSize: "35px",
    color: "F#F#F#",
    height: 60,
    lineHeight: '60px',
}));

const data = [{ value: 0, fieldName: "Posts" }, { value: 0, fieldName: "Likes" }, { value: 0, fieldName: "Subscribers" }]

export default function Statistics() {
    return (
        <Container maxWidth='100%'>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Box
                    sx={{
                        '& > :not(style)': {
                            m: 15,
                            width: 400,
                            height: 70,
                        },
                    }}
                >
                    <Item><a href="#">Pagename</a> statistics</Item>
                </Box>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
            {data.map((item) =>
                <Grid item>
                    <StatisticsCard data={item} />
                </Grid>
            )}
            </Grid>
        </Container>
    );
}