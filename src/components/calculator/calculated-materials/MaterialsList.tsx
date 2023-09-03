import { Box } from "@mui/material";
import Material from "./Material";
import { RequiredMaterial } from "../meals/data/classes/Meal";

export default function MaterialsList(props: {materials: Array<RequiredMaterial>}) {    
    return (
        <Box sx={{ width: 1, height: 1, maxHeight: '100vh', background: '#eaeaea', overflowY: 'scroll', }}>
            {
                props.materials.map((requiredMaterial, index) => (<Material key={index} material={requiredMaterial.material} count={requiredMaterial.count} index={index}></Material>))
            }
        </Box>
    )
}