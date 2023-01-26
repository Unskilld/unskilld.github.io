import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Checkbox, Container, FormControlLabel, FormHelperText, InputLabel, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import CloudUpload from "@mui/icons-material/CloudUpload";
import axios from 'axios';

const validationSchema = yup.object({
    firstName: yup.string().required(''),
    lastName: yup.string().required(''),
});

export default function AccountEditPage(props) {
    const formik = useFormik({
        initialValues: {
            firstName: props.userdata.firstName,
            lastName: props.userdata.lastName,
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

    const [image, setImage] = useState('');

    const formData = new FormData();

    function handleImage(e) {
        setImage(e.target.files[0]);
    }
    return (<Stack direction="row" justifyContent="center">
        <Box sx={{
            width: '80%',
            borderRadius: 5,
            bgcolor: 'lightgrey',
            marginTop: 2,
        }}>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <Stack direction='row' justifyContent='center' marginTop={2}>
                        <Typography fontSize={30}>Edit Profile</Typography>
                    </Stack>

                    <Box sx={{ maxWidth: '80%', marginLeft: 10, marginRight: 10 }}>
                        <InputLabel sx={{ marginTop: 2 }}>First name*</InputLabel>
                        <TextField
                            fullWidth
                            id="firstName"
                            name="firstName"
                            displayEmpty
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <FormHelperText>Required</FormHelperText>
                    </Box>
                    <Box sx={{ maxWidth: '80%', marginLeft: 10, marginRight: 10 }}>
                        <InputLabel sx={{ marginTop: 2 }}>Last name*</InputLabel>
                        <TextField
                            fullWidth
                            id="lastName"
                            name="lastName"
                            displayEmpty
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <FormHelperText>Required</FormHelperText>
                    </Box>

                    <Box sx={{ maxWidth: '80%', marginLeft: 10, marginRight: 10, marginBottom: 2 }}>
                        <InputLabel sx={{ marginTop: 1 }}>Profile picture</InputLabel>
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
                    <Stack direction='row' justifyContent='space-around'>
                        <Button sx={{ marginBottom: 3 }} style={{ backgroundColor: "#616161" }} variant="contained" type="submit">
                            Edit profile
                        </Button>
                    </Stack>
                </form>
            </div>
        </Box>
    </Stack>
    );
}