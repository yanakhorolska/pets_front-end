import { Avatar, Box, Card, Typography } from "../../../../node_modules/@mui/material/index";

export const User = ({ user }) => {
    // const { avatar, name, email, birthday, phone, address } = user;

    return (
        <Card sx={{
            mr:8
        }}>
            <Typography>
                My information:
            </Typography>
            <Box>
                <Avatar
                    // src={avatar}
                    alt="userImage"
                    sx={{
                        width: 200,
                        height:200
                    }}
                />
            </Box>
            <Box>
                <Typography>Name:
                    <Typography>
                        {/* {name} */}
                    </Typography>
                </Typography>
                <Typography>Email:
                    <Typography>
                        {/* {email} */}
                    </Typography>
                </Typography>
                <Typography>Birthday:
                    <Typography>
                        {/* {birthday} */}
                    </Typography>
                </Typography>
                <Typography>Phone:
                    <Typography>
                        {/* {phone} */}
                    </Typography>
                </Typography>
                <Typography>City:
                    <Typography>
                        {/* {address} */}
                    </Typography>
                </Typography>
            </Box>
        </Card>
    )
}