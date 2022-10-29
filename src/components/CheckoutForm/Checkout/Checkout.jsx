import React, {useState} from 'react';
import { Paper, Stepper, Setp, StepLabel, Typography, CircularProgress, Divider, Button, Step  } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles';

const steps = ['Shipping address', 'Payment details'];


const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);

    
  return (
    <div>
        <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={0} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>

                        </Step>
                    ))}

                </Stepper>
            </Paper>
        </main>
        </>
    </div>
  )
}

export default Checkout