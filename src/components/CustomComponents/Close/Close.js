import { IconButton } from "../../../../node_modules/@mui/material/index"
import CloseIcon from '@mui/icons-material/Close';


export const Close = () => {
    return (
        <>
            <IconButton
                size="small"
                sx={{
                    width:30,
                }}
            >
                <CloseIcon/>
            </IconButton>
        </>
    )
}