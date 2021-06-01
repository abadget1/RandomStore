import React from 'react'
import {Input, InputGroup, InputGroupText, InputGroupAddon} from 'reactstrap';
import {useFormContext, Controller} from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';


const FormInput = ({ name, label, required}) => {
    const { control } = useFormContext();
       const isError = false;
    
    return (
       <>
       <Grid>
             <Controller
                control={control}
                name={name}
                error={isError}
                render = {()=> ( <TextField label={label} fullWidth required/> )}/>
        </Grid>

       </>
     );
     }
    
    export default FormInput;