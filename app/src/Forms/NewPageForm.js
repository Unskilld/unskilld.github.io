import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Checkbox, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';


const validationSchema = yup.object({
    pageid: yup.string().required(''),
    content: yup.string().required(''),
});

export default function NewPage() {
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
                    <Typography fontSize={30}>New Page</Typography>
                </Stack>

                <Box sx={{ maxWidth: '80%', marginLeft: 10 }}>
                    <InputLabel sx={{ marginTop: 2 }}>Page name*</InputLabel>
                    <TextField
                        fullWidth
                        id="pageid"
                        name="pageid"
                        displayEmpty
                        value={formik.values.pageid}
                        onChange={formik.handleChange}
                        error={formik.touched.pageid && Boolean(formik.errors.pageid)}
                        helperText={formik.touched.pageid && formik.errors.pageid}
                    />
                    <FormHelperText sx={{ marginBottom: 2 }}>Required</FormHelperText>
                </Box>

                <Box sx={{ maxWidth: '80%', marginLeft: 10 }}>
                    <InputLabel sx={{ marginTop: 2 }}>Image</InputLabel>
                    <TextField
                        sx={{ marginBottom: 2 }}
                        fullWidth
                        id="replyto"
                        name="replyto"
                        displayEmpty
                        input={<OutlinedInput label="Name" />}
                        value={formik.values.replyto}
                        onChange={formik.handleChange}
                    />
                </Box>
                <Box sx={{ maxWidth: '80%', marginLeft: 10 }}>
                    <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}></Checkbox>
                </Box>
                <Box sx={{ maxWidth: '80%', marginLeft: 10 }}>
                    <InputLabel>Description*</InputLabel>
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