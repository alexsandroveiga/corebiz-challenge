import React, { useEffect, useState, useCallback, FormEvent } from 'react'

import { useCart } from '../../hooks/cart'
import api from '../../services/api'
import formatValue from '../../utils/formatValue'
import Slider from 'react-slick'

import starFullIcon from '../../assets/starfull-icon.svg'
import starEmptyIcon from '../../assets/starempty-icon.svg'

import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

import { Container, Content } from './styles'

interface Installment {
  quantity: number
  value: number
}

interface Product {
  productId: number
  productName: string
  stars: number
  imageUrl: string
  listPrice?: number
  price: number
  installments: Installment[]
  quantity?: number
}

const Home: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const { addToCart } = useCart()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products')

      setProducts(response.data)
    }

    loadProducts()
  }, [])

  function handleAddToCart(item: Product): void {
    addToCart(item)
  }

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  }

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      api
        .post('/newsletter', { name, email })
        .then(() => setSuccess(true))
        .catch(() => setError(true))
    },
    [name, email]
  )

  return (
    <Container>
      <Header />
      <Carousel />

      <Content>
        <h1>Mais vendidos</h1>
        <Slider {...settings} className="products">
          {products.map(product => (
            <div className="product" key={product.productId}>
              {product.listPrice && <div className="off">OFF</div>}

              <img src={product.imageUrl} alt={product.productName} />

              <div className="product-content">
                <h1>{product.productName}</h1>

                <div className="rating">
                  {Array.from({ length: 5 }, (_, index) => index + 1).map(
                    item => (
                      <img
                        src={
                          item <= product.stars ? starFullIcon : starEmptyIcon
                        }
                        key={item}
                      />
                    )
                  )}
                </div>

                <span className="listPrice">
                  {product.listPrice ? (
                    `de ${formatValue(product.listPrice)}`
                  ) : (
                    <br />
                  )}
                </span>

                <span className="price">por {formatValue(product.price)}</span>

                {product.installments.map(installment => (
                  <span
                    className="installments"
                    key={installment.quantity + ''}
                  >
                    ou em {installment.quantity}x de{' '}
                    {formatValue(installment.value)}
                  </span>
                ))}

                {product.installments.length === 0 && (
                  <span className="installments">
                    <br />
                  </span>
                )}

                <button
                  onClick={() => handleAddToCart({ ...product, quantity: 1 })}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </Slider>

        <div className="newsletter">
          {success ? (
            <div className="success">
              <h1>Seu e-mail foi cadastrado com sucesso!</h1>
              <p>
                A partir de agora você receberá as novidade e ofertas
                exclusivas.
              </p>
              <button onClick={() => setSuccess(false)}>
                Cadastrar novo e-mail
              </button>
            </div>
          ) : (
            <div>
              <h1>Participe de nossas news com promoções e novidades!</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={e => {
                    setError(false)
                    setName(e.target.value)
                  }}
                  className={error ? 'errored' : ''}
                />
                <input
                  type="text"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={e => {
                    setError(false)
                    setEmail(e.target.value)
                  }}
                  className={error ? 'errored' : ''}
                />

                <button type="submit">Eu quero!</button>
              </form>
            </div>
          )}
        </div>

        <Footer />
      </Content>
    </Container>
  )
}

export default Home
