// // Style your components here
import styled from 'styled-components'

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const InnerDiv1 = styled(OuterDiv)`
  justify-content: center;
  align-items: start;
`
export const HeadingEl = styled.h1`
  color: #35469c;
`

export const BgImageDiv = styled.div`
  background-image: ${props => props.imagePic};
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;
  width: 40vw;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const InputEl = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid ##7e858e;
`
export const SelectEl = styled.select`
  width: 100%;
  height: 30px;
  border: 1px solid ##7e858e;
`
export const OptionsEl = styled.option`
  height: 10vh;
`

export const ButtonEl = styled.button`
  background-color: #0b69ff;
  border: none;
  outline: none;
  height: 30px;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
`
export const ParaEl = styled.p`
  font-size: ${props => props.fontSizeValue}px;
  color: white;
`
