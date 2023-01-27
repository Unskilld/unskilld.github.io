import { Button, List, ListItem, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import cocacolazero from "../Pages/cocacolazero.png"

export default function FollowRequest(props) {

    function handleAccept(e) {
        alert(`Request from ${props.userdata.username} accepted`)
    }

    function handleDeny(e) {
        alert(`Request from ${props.userdata.username} denied`)
    }

    return (
        <Box sx={{
            marginTop: 2,
            height:230,
            borderRadius: 5,
            bgcolor:'lightgrey',
        }}>
            <Stack direction='row' alignItems={'center'}>
                <img src={cocacolazero} style={{ 'borderRadius': 100, marginLeft: 30 }} width='100px' height='100px' />
                <List>
                    <ListItem>
                        <Typography>Username: <Link to="myaccount">{props.userdata.username}</Link> </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>First name: {props.userdata.firstName} </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Last name: {props.userdata.lastName}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Email: {props.userdata.email}</Typography>
                    </ListItem>
                </List>
            </Stack>
            <Stack marginLeft={3} spacing={2} direction='row'>
                <Button variant="contained" onClick={handleAccept}>
                    Accept
                </Button>
                <Button variant="outlined" color="error" onClick={handleDeny}>
                    Deny
                </Button>
            </Stack>
        </Box>
    );
}