import Link from "next/link";
import {Image } from '@chakra-ui/react'
import styled from "@emotion/styled";

const LogoBox = styled.span`
display: inline-flex;

&:hover img {
    transform: scale(1.5);
}
`
const Logo = () => {
  const logoImg = `/images/logo_rojo.png`
  return (
    <Link href="/">
        <LogoBox>
          <Image src={logoImg} width="150px" alt="logo" />
        </LogoBox>
    </Link>
  )
}
export default Logo
