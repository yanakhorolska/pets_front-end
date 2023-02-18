import { NewsCard } from "../NewsCard/NewsCard";
import { Box } from "../../../../node_modules/@mui/material/index";

export const NewsBoard = ({ events }) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap:"wrap"
        }}>
            {events.map(({ _id, title, description, date, url }) => (
                <NewsCard key={_id} title={title} description={description} date={date} url={url}></NewsCard>
            ))};
        </Box>
    );
};