import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import MaterialData from "../meals/data/classes/Material";

export default function Material(props: {material: MaterialData, index: number, count: number}) {
    return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id={`panel${props.index}-header`}
            >
                <Typography>{props.material.name} <b>x{props.count}</b></Typography>
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