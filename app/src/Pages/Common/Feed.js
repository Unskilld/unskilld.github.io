import { Grid } from "@mui/material";
import PostInFeed from "../../Elements/PostInFeed";
import testobj from "./testobj";

export default function FeedPage() {
    const objectsArray = []
    for (let i = 0; i < 10; i++) {
        objectsArray.push(testobj)
    }
    return (
        <>
            <Grid container direction='column' alignItems='center'>
                {objectsArray.map((object) =>
                    <PostInFeed testobj={object} />
                )}
            </Grid>
        </>
    );
}