import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Checkbox, FormControlLabel, FormHelperText, InputLabel, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import CloudUpload from "@mui/icons-material/CloudUpload";
import axios from 'axios';


const validationSchema = yup.object({
    pagename: yup.string().required(''),
    description: yup.string().required(''),
});

export default function NewPage() {
    const formik = useFormik({
        initialValues: {
            pagename: '',
            private: false,
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(image)
            formData.append('image', image);
            axios({
                method: 'post',
                url: 'http://google.com',
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            })
                .then((response) => console.log(response))
                .catch((err) => console.log(err));
            ;
        },
    });

    const [image, setImage] = useState({});

    const formData = new FormData();

    function handleImage(e) {
        setImage(e.target.files[0]);
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Stack direction='row' justifyContent='center' marginTop={2}>
                    <Typography fontSize={30}>New Page</Typography>
                </Stack>

                <Box sx={{ maxWidth: '80%', marginLeft: 10, marginRight: 10 }}>
                    <InputLabel sx={{ marginTop: 2 }}>Page name*</InputLabel>
                    <TextField
                        fullWidth
                        id="pagename"
                        name="pagename"
                        displayEmpty
                        value={formik.values.pagename}
                        onChange={formik.handleChange}
                        error={formik.touched.pagename && Boolean(formik.errors.pagename)}
                        helperText={formik.touched.pagename && formik.errors.pagename}
                    />
                    <FormHelperText>Required</FormHelperText>
                </Box>

                <Box sx={{ maxWidth: '80%', marginLeft: 10, marginRight: 10 }}>
                    <InputLabel sx={{ marginTop: 1 }}>Image</InputLabel>
                    <Button
                        component="label"
                        variant="contained"
                        style={{ backgroundColor: "#616161" }}
                        startIcon={<CloudUpload />}
                    >
                        Upload image
                        <input type="file" name='file' accept="image/*" hidden onChange={handleImage} />
                    </Button>
                </Box>
                <Box sx={{ maxWidth: '80%', marginLeft: 10, marginTop: 1 }}>
                    <FormControlLabel
                        control={<Checkbox checked={formik.values.private} color='default' />}
                        onClick={formik.handleChange}
                        name='private'
                        label="Private page?"
                    />
                </Box>
                <Box sx={{ maxWidth: '80%', marginLeft: 10, marginRight: 10 }}>
                    <InputLabel>Description*</InputLabel>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        id="description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />
                    <FormHelperText sx={{ marginBottom: 2 }}>Required</FormHelperText>
                </Box>
                <Stack direction='row' justifyContent='center'>
                    <Button sx={{ marginBottom: 3 }} style={{ backgroundColor: "#616161" }} variant="contained" type="submit">
                        Create new page
                    </Button>
                </Stack>
            </form>
        </div>
    );
};