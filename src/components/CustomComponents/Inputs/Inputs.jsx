import { Box, Container, TextField,Typography } from "../../../../node_modules/@mui/material/index"
import { OrangeButton } from "../Buttons/Buttons"


export const LoginForm = () => {
    return (
        <Container sx={{
            width: 618,
            p:0,
        }}>
            <Box component="form" sx={{
                display: 'flex',
                flexDirection:'column',
                alignItems: 'center',
            }}>
                <Typography variant="h4" sx={{ mb: 1.5, ml:1.5, }}>
                        Login
                </Typography>
                <TextField
                    required
                    id="name"
                    label="Name"
                    name="name"
                    sx={{
                        mb: 1.5,
                        width: 458,
                        '& fieldset': {
                            borderRadius: '30px',
                            borderColor: '#F59256'
                        },
                    }}
                />
                <TextField
                    required
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    sx={{
                        mb: 1.5,
                        width: 458,
                        '& fieldset': {
                            borderRadius: '30px',
                            borderColor: '#F59256'
                        },
                    }}
                />
                <OrangeButton sx={{
                    width:458
                }}>
                    Login
                </OrangeButton>
            </Box>
        </Container>
    )
}

