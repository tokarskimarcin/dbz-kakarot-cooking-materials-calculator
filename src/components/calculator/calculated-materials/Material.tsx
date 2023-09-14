import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Theme, Typography, makeStyles } from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import MaterialData from "../meals/data/classes/Material";
import * as React from 'react';

export default function Material(props: {material: MaterialData, index: number, count: number}) {
    const [checked, setChecked] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const numberFormatter = Intl.NumberFormat('en', {notation: 'compact'});

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    };
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        if (e.target.checked) {
            setExpanded(false);
        }
    }

    const handleAccordionChange = (e: React.SyntheticEvent) => {
        setExpanded((current) => !current);
    }

    const striked = checked? {textDecoration: 'line-through'} : {};

    const accordionChecked = checked? {background: 'WhiteSmoke', color: 'lightgray'} : {};

    return (
        <Accordion expanded={expanded} onChange={handleAccordionChange} sx={accordionChecked}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${props.index}-content`}
                id={`panel${props.index}-header`}
            >
                <Checkbox sx={{p: '2px'}} checked={checked} onChange={handleCheckboxChange} onClick={handleClick}></Checkbox>
                <Typography sx={striked}>{props.material.name} <b>x{numberFormatter.format(props.count)}</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={striked}>
                    // TODO: add list of information about locations
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}