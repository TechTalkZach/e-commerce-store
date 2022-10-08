import Commerce from "@chec/commerce.js";

// API key from Commerce.js is hidden in .env 
// **Creation of new commerce store**
export const commerce = new Commerce(process.env(REACT_APP_CHEC_PUBLIC_KEY, true));