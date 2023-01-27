import { Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import FollowRequest from "../../Elements/FollowRequest";
import userdata from "../../userdata";

export default function FollowRequests() {
    function handleAccept(e) {
        alert('All requests accepted')
    }
    function handleDeny(e) {
        alert('All requests denied')
    }
    const objectsArray = []
    for (let i = 0; i < 10; i++) {
        objectsArray.push(userdata)
    }
    return (
        <Container>
            <Stack direction={'row'} justifyContent={'space-around'} marginTop={2} marginBottom={3}>
                <Button variant="contained" onClick={handleAccept}>
                    Accept All Requests
                </Button>
                <Button variant="outlined" color="error" onClick={handleDeny}>
                    Deny all requests
                </Button>
            </Stack>
            {objectsArray.map((object) =>
                    <FollowRequest userdata={object} />
                )}
        </Container>
    );
}