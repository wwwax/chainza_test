import styled from 'styled-components'

const StyledWrapper = styled.div`
  padding: 24px 8px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fc;
  border-radius: 16px;

  &:last-child {
    margin-top: 4px;
  }
`

const StyledInput = styled.input`
  padding: 4px;
  border: none;
  background: transparent;
  font-size: 24px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const StyledSelect = styled.select`
  border: none;
  background: transparent;
  outline: none;
`

const Token = () => {
  return (
    <StyledWrapper>
      <StyledInput type="number" placeholder="0" />
      <StyledSelect>
        <option value="">Select token</option>
      </StyledSelect>
    </StyledWrapper>
  )
}

export default Token
