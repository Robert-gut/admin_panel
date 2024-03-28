import * as React from 'react'
import { ColorBlock } from '../../components/ColorBlock/ColorBlock'
import {
    TextField, Button, Typography, Box, Checkbox, Grid,
    FormControlLabel, Select, SelectChangeEvent, MenuItem,
    FormControl, InputLabel
} from '@mui/material'


const label = { inputProps: { 'aria-label': 'Is Activated' } }

export default function EditProfile() {
    const [sex, setSex] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setSex(event.target.value)
    }

    const styleBox = {
        width: '50%',
        margin: '70px auto'
    }

    const styleContainer = {
        background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4)',
        display: 'flex',
        alignItems: 'center',
        padding: '15px'
    }

    return (
        <ColorBlock yourStyleBox={styleBox} yourStyleContainer={styleContainer}
            containerChild={
                <Box>
                    <Typography component='h4'>
                        Edit Profile
                    </Typography>
                    <Typography variant='subtitle2' component='p' sx={{ color: 'rgba(255,255,255,.62)' }}>
                        Complete your profile
                    </Typography>
                </Box>
            }
            boxChildren={
                <form noValidate>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id='first-name-input'
                                name='first-name-input'
                                label='First Name'
                                variant='standard'
                                color='secondary'
                                autoComplete='fname'
                                required
                                fullWidth
                                autoFocus />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id='last-name-input'
                                name='last-name-input'
                                label='Last Name'
                                variant='standard'
                                color='secondary'
                                autoComplete='lname'
                                required
                                fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField
                                id='role-input'
                                name='role-input'
                                defaultValue='Role (disabled)'
                                variant='standard'
                                autoComplete='role'
                                disabled
                                fullWidth
                                sx={{ marginTop: '16px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl variant='standard' color='secondary' fullWidth>
                                <InputLabel id='sex-select'>Sex</InputLabel>
                                <Select
                                    id='sex-input'
                                    name='sex-input'
                                    labelId='sex-label'
                                    label='Sex'
                                    autoComplete='sex'
                                    value={sex}
                                    onChange={handleChange}
                                >
                                    <MenuItem value=''>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'male'}>Male</MenuItem>
                                    <MenuItem value={'female'}>Female</MenuItem>
                                    <MenuItem value={'other'}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id='email-input'
                                name='email-input'
                                label='Email'
                                autoComplete='email'
                                variant='standard'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id='phone-number-input'
                                name='phone-number-input'
                                label='Phone Number'
                                autoComplete='phoneNumber'
                                variant='standard'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id='current-password-input'
                                name='current-password-input'
                                label='Current Password'
                                type='password'
                                autoComplete='current-password'
                                variant='standard'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id='new-password-input'
                                name='new-password-input'
                                label='New Password'
                                type='password'
                                autoComplete='new-password'
                                variant='standard'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox id='isActivated-checkbox' color='secondary' {...label} />}
                                label={<Typography sx={{ color: '#767676' }}>Is Activated</Typography>}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type='submit'
                                variant='contained'
                                color='secondary'
                                sx={{
                                    fontSize: '12px',
                                    padding: '12px 30px',
                                }}
                            >
                                Update Profile
                            </Button>
                        </Grid>
                    </Grid>
                </ form>
            }
        ></ColorBlock >

    )
}