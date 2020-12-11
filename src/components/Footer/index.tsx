import React from 'react'

import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="wrap">
        <div className="place">
          <h1>Localização</h1>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
      </div>
    </Container>
  )
}

export default Footer
