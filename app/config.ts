// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://frameprovoid228.vercel.app/';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0x30a75015a6745792E868D8D289089459275Edef9';
