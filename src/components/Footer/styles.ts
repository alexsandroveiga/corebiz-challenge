import styled from 'styled-components'

export const Container = styled.div`
  background: #000;
  color: #fff;
  padding: 1rem;

  .place {
    font-size: 0.813em;

    h1 {
      position: relative;
      font-size: 1.125rem;
      font-weight: 900;
      margin-bottom: 1rem;

      &:after {
        position: absolute;
        width: 32px;
        height: 4px;
        content: '';
        bottom: -4px;
        background: #fff;
        left: 0;
      }
    }
  }
`
