import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import postData from "./postdata";


export default function SinglePost() {
    return (
        <>
            <Stack
                marginTop={2}
                marginLeft={2}
                marginBottom={2}
                direction='row'
                justifyContent='space-around'
                spacing={8}
                alignItems='center'>
                <List>
                    <Typography marginTop={0.5}>Page name: {postData.pageName}</Typography>
                    <Typography marginTop={0.5}>Post author: {postData.postAuthorName}</Typography>
                    <Typography marginTop={0.5}>Reply to: <Link to="">{postData.postReplyTo}</Link></Typography>
                    <Typography marginTop={0.5}>Likes: {postData.postLikes.map((item) => <><Link to="/myaccount">{item.likeUserName}</Link>, </>)}</Typography>
                </List>
                <List>
                    <ListItem>
                        <Link to='/pages/page/post/edit'>Update this post</Link>
                    </ListItem>
                </List>
            </Stack>
            <Typography marginLeft={8} marginRight={8}>Content:</Typography>
            <Typography marginLeft={8} marginRight={8}>{postData.postContent}</Typography>
        </>
    );
}