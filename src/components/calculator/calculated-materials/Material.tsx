import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Typography } from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import MaterialData from "../meals/data/classes/Material";
import * as React from 'react';

export default function Material(props: {material: MaterialData, index: number, count: number}) {
    const numberFormatter = Intl.NumberFormat('en', {notation: 'compact'});

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
    };
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${props.index}-content`}
                id={`panel${props.index}-header`}
            >
                <Checkbox sx={{p: '2px'}} onClick={handleClick}></Checkbox><Typography>{props.material.name} <b>x{numberFormatter.format(props.count)}</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    // TODO: add list of information about locations
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}