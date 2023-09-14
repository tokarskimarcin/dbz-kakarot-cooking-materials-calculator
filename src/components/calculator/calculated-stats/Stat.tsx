import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import MaterialData from "../meals/data/classes/Material";
import { Buff } from "../meals/data/classes/Meal";

export default function Stat(props: {buff: Buff, index: number}) {
    return (
        <Typography>{props.buff.getLabel()}</Typography>
    );
}