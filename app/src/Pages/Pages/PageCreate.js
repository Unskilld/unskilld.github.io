import { Box, Stack } from "@mui/material";
import NewPage from "../../Forms/NewPageForm";

export default function PageCreate() {
    return (<Stack direction='row' justifyContent='center'>
        <Box sx={{
            width: '80%',
            borderRadius: 5,
            bgcolor: 'lightgrey',
            marginTop: 2,
        }}>
            <NewPage />
        </Box>
    </Stack>
    );
}