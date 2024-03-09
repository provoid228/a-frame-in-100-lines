// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://frameprovoid228.vercel.app/';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0x7aC06C2b969e31ff155901743baC02D210a6A46B';
