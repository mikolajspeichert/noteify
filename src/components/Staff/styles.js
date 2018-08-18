import styled from 'styled-components'
import StaffLine from 'assets/svgs/components/staffLine'

const Background = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
`

const Container = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export { Background, StaffLine, Container }