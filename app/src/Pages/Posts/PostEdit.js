import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const validationSchema = yup.object({
    content: yup.string().required(''),
});


export default function PostEdit(props) {
    const formik = useFormik({
        initialValues: {
            content: props.postData.postContent,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    function handleDeletion(e){
        alert("Deleting post")
    }
    return (<Stack direction='row' justifyContent='center'>
        <Box sx={{
            width: '80%',
            borderRadius: 5,
            bgcolor: 'lightgrey',
            marginTop: 2,
        }}>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <Stack direction='row' justifyContent='center' marginTop={2}>
                        <Typography fontSize={30}>Edit Post</Typography>
                    </Stack>
                    <Box sx={{ maxWidth: '80%', marginLeft: 10 }}>
                        <InputLabel>Content*</InputLabel>
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            id="content"
                            name="content"
                            value={formik.values.content}
                            onChange={formik.handleChange}
                            error={formik.touched.content && Boolean(formik.errors.content)}
                            helperText={formik.touched.content && formik.errors.content}
                        />
                        <FormHelperText sx={{ marginBottom: 2 }}>Required</FormHelperText>
                    </Box>
                    <Stack direction='row' justifyContent='space-around'>
                        <Button sx={{ marginBottom: 2 }} style={{ backgroundColor: "#616161" }} variant="contained" type="submit">
                            Edit post
                        </Button>
                        <Button sx={{ marginBottom: 2 }} color='error' variant="outlined" onClick={handleDeletion}>
                            Delete post
                        </Button>
                    </Stack>
                </form>
            </div>
        </Box>
    </Stack>

    );
}