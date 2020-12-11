import React from 'react'

import { useCart } from '../../hooks/cart'

import { Container, Content } from './styles'

import corebizLogo from '../../assets/logo.svg'
import cartIcon from '../../assets/cart-icon.svg'
import menuIcon from '../../assets/menu-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
import userIcon from '../../assets/user-icon.svg'

const Header: React.FC = () => {
  const { products } = useCart()

  return (
    <Container>
      <Content>
        <div className="hamburger">
          <img src={menuIcon} />
        </div>

        <img src={corebizLogo} className="logo" />

        <div className="cart">
          <img src={cartIcon} />
          {products.length > 0 && <span>{products.length}</span>}
        </div>

        <div className="search">
          <input type="text" placeholder="O que está procurando?" />
          <button>
            <img src={searchIcon} />
          </button>
        </div>

        <div className="user">
          <img src={userIcon} />
          Minha conta
        </div>
      </Content>
    </Container>
  )
}

export default Header
