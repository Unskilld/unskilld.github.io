import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const PostInFeed = (props) => {

    return (
        <>
            <Box
                sx={{
                    width: '80%',
                    height: 240,
                    borderRadius: 5,
                    bgcolor: 'lightgrey',
                    marginTop: 2,
                    justifyContent: 'space-between',
                }}
            >
            <Typography marginTop={1} marginLeft={2} fontSize={24}>
                Page: <Link to='/pages/page'>{props.testobj.pageName}</Link>
            </Typography>
            <Typography marginLeft={2} fontSize={24}>
                Reply to: None/<Link to='/pages/page/post'>{props.testobj.postId}</Link>
            </Typography>
            <Typography marginLeft={2} fontSize={24}>
                Likes : 0
            </Typography>
            <Typography marginLeft={2} fontSize={24} >
                Content:
            </Typography>
            <Typography marginLeft={2} fontSize={20} noWrap>
                {props.testobj.content}
            </Typography>
            <Button
            style = {{backgroundColor:"#616161", marginTop: 8, marginLeft:16}}
            variant="contained"
            href="pages/page/post"
          >
            Read more
          </Button>
            </Box>
        </>
    );
}

export default PostInFeed