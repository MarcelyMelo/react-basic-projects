import { TextField, Button, Checkbox } from '@mui/material';
import React from "react";

export default function Form(){
    return(
        <div>
            <TextField id="outlined-basic" label="seu texto" variant="outlined" />
            <Button variant="contained">Add</Button>

        </div>
    )
}

