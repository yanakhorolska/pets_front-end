import { Box } from "../../../../node_modules/@mui/material/index"
import { MyPets } from "./MyPets"
import { User } from "./User"

export const UserCard = () => {
    return (
        <Box sx={{
            display: "flex",
            width:1200
        }}>
            <User />
            <MyPets/>
        </Box>
    )
    
} 