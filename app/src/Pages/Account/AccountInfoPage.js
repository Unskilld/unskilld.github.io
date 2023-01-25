import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import cocacolazero from "../cocacolazero.png"


export default function AccountInfoPage(props) {
    return (
        <Grid container justifyContent="center" spacing="20%" >
            <Grid item >
                <img src={cocacolazero} style={{'borderRadius':100}} width='200px' />
            </Grid>
            <Grid item >
            <List>
                <ListItem>
                    <Typography>Username: {props.userdata.username}</Typography>
                </ListItem>
                <ListItem>
                    <Typography>First name: {props.userdata.firstName}</Typography>
                </ListItem>
                <ListItem>
                <Typography>Last name: {props.userdata.lastName}</Typography>
                </ListItem>
                <ListItem>
                <Typography>Email: {props.userdata.email}</Typography>
                </ListItem>
                </List>
            </Grid>
            <Grid item >
                <Link to='/accountedit'>Update your page info</Link>
            </Grid>
        </Grid>
    );
}