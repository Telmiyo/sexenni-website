import Link from "next/link";
import {Image } from '@chakra-ui/react'
import styled from "@emotion/styled";

export const LogoBox = styled.span`
display: inline-flex;

&:hover img {
    transform: scale(1.5);
}
`
const Logo = ({w = 150}) => {
  const logoImg = `/images/Logo_rojo.png`
  return (
    <Link href="/">
        
          <Image src={logoImg} width={w} alt="logo" />
       
    </Link>
  )
}
export default Logo
