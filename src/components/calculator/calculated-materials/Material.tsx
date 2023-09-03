import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import MaterialData from "../meals/data/classes/Material";

export default function Material(props: {material: MaterialData, index: number, count: number}) {
    return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`panel${props.index}-content`}
            id={`pane${props.index}-header`}
            >
                <Typography>{props.material.name} <b>x{props.count}</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    // TODO: add list of information about locations
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}