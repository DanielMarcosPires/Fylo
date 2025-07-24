import { Open_Sans, Raleway } from "next/font/google"

const raleway = Raleway({
  weight:['400','700'],
  subsets:['latin'],
})

const open_sans = Open_Sans({
  weight:["400","700"],
  subsets:['latin']
})

export {raleway,open_sans}