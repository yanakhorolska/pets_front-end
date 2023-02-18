import { IconButton } from "../../../../node_modules/@mui/material/index"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export const LikeButton = () => {
    return (
        <>
            <IconButton
                sx={{
                    width: 44,
                    height: 44,
                    p:0,
                }}
            >
                <FavoriteBorderIcon sx={{
                    width: 28,
                    height: 28,
                    color: '#F59256',
                    borderRadius: '50%',
                    p:0,
                }} />
            </IconButton>
        </>
    )
}