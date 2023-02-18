import { Box, InputAdornment, TextField,} from "../../../../node_modules/@mui/material/index"
import SearchIcon from '@mui/icons-material/Search';


export const SearchField = () => {
    return (
        <Box>
            <TextField
                type='text'
                name="search"
                playceHolder
                InputProps={{
                    endAdornment:
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    
                }}
                // onChange={handleChange }
                sx={{
                        mb: 1.5,
                        width: 458,
                        '& fieldset': {
                            borderRadius: '30px',
                        }
                    }}
            />
        </Box>
    )
}