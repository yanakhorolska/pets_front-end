import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box} from "../../../../node_modules/@mui/material/index";


export function NewsCard() {
    return (
        <Box sx={{
            width:396,
            p:0
        }}>
            <Box sx={{
                width: 340,
                height: 8,
                background: 'linear-gradient(to right, #FF634E, #ffff00)',
                mb: 0.25,
                borderRadius:'10px',
            }}>
            </Box>
            <Card sx={{
                width: 395,
                height: 254,
                mb:1
            }}>
                <CardContent sx={{p: 0}}>
                    <Typography variant="h5" component="div" sx={{m:1.5,fontSize:28, fontWeight:'bold' }}>
                        Title{ }
                    </Typography>
                    <Typography sx={{ mb: 1.5, ml:1.5 }}>
                        Description{}
                    </Typography>
                    </CardContent>
                </Card>
        </Box>
    );
}
