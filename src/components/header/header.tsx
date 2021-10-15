import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
   padding: 20px;
   background-color: #000;
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const Title = styled.h1`
   font-size: 1.2em;
   color: #fff;
`
const Name = styled.h2`
  font-size: 0.9em;
  color:#fff;
`

interface HeaderProps{
    title:string
    name:string   
}

const Header:React.FC<HeaderProps> = ({title,name}) => {
    return (
        <StyledHeader>
            <Title>{title}</Title>
            <Name>{name}</Name>
        </StyledHeader>
    )
}

export default Header;