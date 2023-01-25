import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import NewPost from "../../Forms/NewPostForm";

export default function PostCreate() {
    return (
        <Stack direction='row' justifyContent='center'>
            <Box sx={{
                width: '80%',
                borderRadius: 5,
                bgcolor: 'lightgrey',
                marginTop: 2,
            }}>
                <NewPost />
            </Box>
        </Stack>
    );
}