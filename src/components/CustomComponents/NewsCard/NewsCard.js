import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Link} from "../../../../node_modules/@mui/material/index";


export const NewsCard = ({ title, description, date, url }) => {
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
                        {/* {title} */}
                        title
                    </Typography>
                    <Typography sx={{ mb: 1.5, ml:1.5 }}>
                        {/* {description} */}
                        description
                    </Typography>
                    <Typography sx={{ mb: 1.5, ml:1.5 }}>
                        {/* {date} */}
                        date
                    </Typography>
                    <Link
                        // href={url}
                    >Read more</Link>
                </CardContent>
            </Card>
        </Box>
    );
}
