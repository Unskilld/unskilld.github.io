import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import cocacolazero from "../cocacolazero.png";
import pageData from "./pagedata";


export default function SinglePage() {
    return (
        <>
            <Stack direction='row'
                justifyContent='space-around'
                spacing={8}
                alignItems='center'
                marginTop={2}>
                <img src={cocacolazero} style={{ "borderRadius": 100 }} width='200px' />
                <List>
                    <Typography>Page name: {pageData.pageName}</Typography>
                    <Typography>Page uuid: {pageData.pageUuid}</Typography>
                    <Typography>Page owner: <Link to="/myaccount">{pageData.pageOwner}</Link></Typography>
                    <Typography>Private: {pageData.pageIsPrivate}</Typography>
                    <Typography>Followers: {pageData.pageFollowers.map((item) => <><Link to="/myaccount">{item.followerName}</Link>, </>)}</Typography>
                </List>
                <List>
                    <ListItem>
                        <Link to='/page/edit'>Update your page info</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/followrequests'>Follow requests</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/page/statistics'>Statistics</Link>
                    </ListItem>
                </List>
            </Stack>
            <Typography marginTop={2} marginLeft={10} marginRight={10}>Description:</Typography>
            <Typography marginTop={0.5} marginLeft={10} marginRight={10}>{pageData.pageDescription}</Typography>
        </>
    );
}