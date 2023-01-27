import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const PageInFeed = (props) => {

    return (
        <Box
            sx={{
                width: '80%',
                borderRadius: 5,
                bgcolor: 'lightgrey',
                marginTop: 2,
                justifyContent: 'space-between',
            }}
        >
            <Typography marginTop={1} marginLeft={2} fontSize={24}>
                Page name: <Link to='/pages/page'>{props.testobj.pageName}</Link>
            </Typography>
            <Typography marginTop={1} marginLeft={2} fontSize={24}>
                Page owner: <Link to='/myaccount'>{props.testobj.pageOwner}</Link>
            </Typography>
            <Typography marginLeft={2} fontSize={24}>
                Private: Yes/No
            </Typography>
            <Typography marginLeft={2} fontSize={24}>
                Followers : {props.testobj.pageFollowers.map((item) => <><Link to="/myaccount">{item}</Link>, </>)}
            </Typography>
            <Typography marginLeft={2} fontSize={24} >
                Description:
            </Typography>
            <Typography marginLeft={2} fontSize={20} noWrap>
                {props.testobj.content}
            </Typography>
            <Button
                style={{ backgroundColor: "#616161", marginTop: 8, marginLeft: 16, marginBottom: 15 }}
                variant="contained"
                href="pages/page"
            >
                details
            </Button>
        </Box>
    );
}

export default PageInFeed