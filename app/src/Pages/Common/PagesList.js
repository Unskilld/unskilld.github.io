import { Grid } from "@mui/material";
import PageInFeed from "../../Elements/PageInFeed";
import testobj from "./testobj";


export default function PagesPage() {
    const objectsArray = []
    for (let i = 0; i < 10; i++) {
        objectsArray.push(testobj)
    }
    return (
        <Grid container direction='column' alignItems='center'>
            {objectsArray.map((object) =>
                <PageInFeed testobj={object} />
            )}
        </Grid>
    );
}