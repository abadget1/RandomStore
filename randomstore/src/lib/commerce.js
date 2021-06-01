import Commerce from '@chec/commerce.js';

// Need a try catch block to catch api ocnnection errors....
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);