'use client'

import styled from 'styled-components'
import Token from './components/Token'

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff5fb;
`

const StyledContainerInner = styled.div`
  width: 40%;
  min-height: 300px;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid lightgrey;
  border-radius: 16px;
`

const StyledTitle = styled.div`
  padding: 0 8px 16px; // todo: add global styles
`

export default function Home() {
  return (
    <StyledContainer>
      <StyledContainerInner>
        <StyledTitle>Swap</StyledTitle>
        <Token />
        <Token />
      </StyledContainerInner>
    </StyledContainer>
  )
}
