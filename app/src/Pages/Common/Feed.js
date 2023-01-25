import { Grid } from "@mui/material";
import PostInFeed from "../../Elements/PostInFeed";

const testobj = {pageName:"Testprops",postId:"Testid",content:"Incididunt anim quis aute in occaecat adipisicing ea id. Nisi elit laborum qui aliquip eu qui duis fugiat qui quis. Dolore id incididunt ipsum aliqua adipisicing voluptate occaecat occaecat eu voluptate elit. Reprehenderit non et proident pariatur officia enim proident ad deserunt ut et. Et et fugiat quis consectetur qui ad dolore cupidatat ea aute ex est. Tempor veniam Lorem dolore nostrud culpa Lorem excepteur non sint veniam. Voluptate mollit ex reprehenderit ipsum culpa irure est."};

export default function FeedPage() {
    const objectsArray=[]
    for (let i=0;i<10;i++) {
        objectsArray.push(testobj)
    }
    return (
        <>
            <Grid container direction='column' alignItems='center'>
                {objectsArray.map((object) =>
                <PostInFeed testobj={object}/>
                )}
            </Grid>
        </>
    );
}