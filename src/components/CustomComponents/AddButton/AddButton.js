import { IconButton } from "../../../../node_modules/@mui/material/index"
import AddIcon from '@mui/icons-material/Add';



export const AddButton = () => {
    return (
        <>
            <IconButton
                sx={{
                    width: 44,
                    height:44,
                    p: 0,
                    backgroundColor: '#F59256',
                }}
            >
                <AddIcon sx={{
                    width: 28,
                    height: 28,
                    color: '#ffffff',
                    borderRadius: '50%',
                    p: 0,
                    '&:hover': {
                        color:'#F59256'
                    }
                }} />
            </IconButton>
        </>
    )
}