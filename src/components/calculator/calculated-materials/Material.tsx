import Meal from "../meals/data/Meal";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

export default function Material(props: {meal: Meal, index: number}) {
    return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id={`panel${props.index}-header`}
            >
                <Typography>{props.meal.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}