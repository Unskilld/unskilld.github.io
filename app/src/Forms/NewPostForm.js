import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';


const validationSchema = yup.object({
    pageid: yup.string().required(''),
    content: yup.string().required(''),
});

export default function NewPost() {
    const formik = useFormik({
        initialValues: {
            pageid: '',
            replyto: '',
            content: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Stack direction='row' justifyContent='center' marginTop={2}>
                    <Typography fontSize={30}>New Post</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-around'>
                    <div>
                        <InputLabel sx={{ marginTop: 2 }}>Page id*</InputLabel>
                        <Select
                            autoWidth
                            id="pageid"
                            name="pageid"
                            displayEmpty
                            value={formik.values.pageid}
                            onChange={formik.handleChange}
                            error={formik.touched.pageid && Boolean(formik.errors.pageid)}
                            helperText={formik.touched.pageid && formik.errors.pageid}
                        >
                            <MenuItem value=''>Choose one of your pages</MenuItem>
                            <MenuItem value={1}>Users page number 1</MenuItem>
                            <MenuItem value={2}>Users page number 2</MenuItem>
                            <MenuItem value={3}>Users page number 3</MenuItem>
                        </Select>
                        <FormHelperText sx={{ marginBottom: 2 }}>Required</FormHelperText>
                    </div>
                    <div>
                        <InputLabel sx={{ marginTop: 2 }}>Reply to</InputLabel>
                        <Select
                            sx={{ marginBottom: 2 }}
                            autoWidth
                            id="replyto"
                            name="replyto"
                            displayEmpty
                            input={<OutlinedInput label="Name" />}
                            value={formik.values.replyto}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value=''>None</MenuItem>
                            <MenuItem value={1}>Reply to post 1</MenuItem>
                            <MenuItem value={2}>Reply to post 2</MenuItem>
                            <MenuItem value={3}>Reply to post 3</MenuItem>
                        </Select>
                    </div>
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
                <Stack direction='row' justifyContent='center'>
                    <Button sx={{ marginBottom: 2 }} style={{ backgroundColor: "#616161" }} variant="contained" type="submit">
                        Create new post
                    </Button>
                </Stack>
            </form>
        </div>
    );
};