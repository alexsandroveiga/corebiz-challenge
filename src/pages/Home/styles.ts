import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
`

export const Content = styled.div`
  > h1 {
    position: relative;
    font-size: 1.125rem;
    font-weight: 900;
    margin: 1rem;

    &:after {
      position: absolute;
      width: 32.5px;
      height: 4px;
      content: '';
      bottom: -4px;
      background: #c0c0c0;
      left: 0;
    }
  }

  .products {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    padding: 0 1rem;

    .product {
      width: calc(50% - 0.5rem);
      margin-bottom: 1rem;
      position: relative;
      overflow: hidden;

      .off {
        position: absolute;
        top: 0;
        right: 0;
        width: 44px;
        height: 44px;
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 600;
      }

      img {
        display: block;
        width: 100%;
      }

      h1 {
        color: #7a7a7a;
        font-size: 0.625rem;
        margin-top: 0.25rem;
        font-weight: 600;
        text-align: center;
      }

      .listPrice {
        font-size: 0.75rem;
        text-decoration: line-through;
        color: #7a7a7a;
        display: block;
        text-align: center;
      }

      .price {
        font-weight: 700;
        display: block;
        text-align: center;
      }

      button {
        background: #000;
        border: 0;
        height: 36px;
        width: 100%;
        border-radius: 5px;
        margin-top: 0.5rem;
        color: #fff;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 0.9rem;
      }

      .rating {
        display: flex;
        justify-content: center;
        margin: 1rem 0 0.5rem 0;

        img {
          width: 12px;

          & + img {
            margin-left: 0.25rem;
          }
        }
      }
    }
  }

  .newsletter {
    background: #f2f2f2;
    padding: 1rem;

    h1 {
      font-size: 22px;
      line-height: 1;
    }

    input {
      margin-top: 1rem;
      width: 100%;
      height: 48px;
      font-size: 0.75rem;
      font-weight: 700;
      border: 0;
      padding: 0 1rem;
      border-radius: 5px;

      &:focus {
        border: 1px solid #bdbdbd;
      }

      &.errored {
        border: 1px solid #d7182a;
      }
    }

    button {
      background: #000;
      border: 0;
      height: 48px;
      width: 100%;
      border-radius: 5px;
      margin-top: 1rem;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.875rem;
    }

    .success {
      font-size: 0.75rem;
      text-align: center;

      h1 {
        font-size: 0.875rem;
      }
    }
  }

  @media only screen and (min-width: 67em) {
    > h1 {
      margin: 1rem auto;
      width: 1050px;
    }

    .products {
      width: 1050px;
      margin: 0 auto;
      padding: 0;

      .product {
        width: calc(25% - 0.75rem);
      }
    }

    .newsletter {
      text-align: center;

      form {
        width: 1050px;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        input {
          width: 280px;
          margin-right: 1rem;
        }

        button {
          width: 140px;
          padding: 0 1rem;
          text-transform: none;
        }
      }

      .success button {
        width: 320px;
        text-transform: none;
      }
    }
  }
`
