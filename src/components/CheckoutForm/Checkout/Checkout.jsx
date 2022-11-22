import React, {useState, useEffect} from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles';
import { Link, useNavigate } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];


const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setisFinished] = useState(false);
    const classes = useStyles();
    // const history = useHistory();
    const navigate = useNavigate();

    useEffect(() => {
        if(cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, {  type: 'cart'});
    
                    console.log(token);
    
                    setCheckoutToken(token);
                } catch (error) {
                    if(activeStep !== steps.length) navigate('/');
                }
            }
            generateToken();

        }
      

    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);

        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setisFinished(true);
        }, 3000);
    }

    let Confirmation = () => order.customer ? (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br/>
          <Button component={Link} to="/" variant="outlined" type="button" >Back to Home</Button>
        </>
    ) : isFinished ? (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase</Typography>
            <Divider className={classes.divider} />
          </div>
          <br/>
          <Button component={Link} to="/" variant="outlined" type="button" >Back to Home</Button>
        </>

    ) : (
        <div className={classes.spinner} >
            <CircularProgress />
        </div>
    );

    if(error) (
        <>
        <Typography variant="h5">Error: {error} </Typography>
        <br/>
        <Button component={Link} to="/" variant="outlined" type="button" >Back to Home</Button>
        </>
    )

    const Form = () => activeStep === 0 
         ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} next={next}/>
         : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>

    
  return (
    <div>
        <>
        <CssBaseline />
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>

                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </Paper>
        </main>
        </>
    </div>
  )
}

export default Checkout