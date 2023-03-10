import styled from 'styled-components'

export const IntroContainer = styled.div`
  padding: 6.25rem 0;
`

export const Intro = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme.colors['base-title']};
  }

  p {
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const IntroItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    gap: 3.5rem;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.colors['base-text']};

      gap: 0.6rem;
    }
  }
`

export const IntroIcon = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors['brand-purple']};
  padding: 0.5rem;
  border-radius: 50%;

  svg {
    background: transparent;
    color: ${(props) => props.theme.colors['base-white']};
  }

  &.cart {
    background: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
  &.stock {
    background: ${(props) => props.theme.colors['base-text']};
  }
  &.clock {
    background: ${(props) => props.theme.colors['brand-yellow']};
  }
  &.coffee {
    background: ${(props) => props.theme.colors['brand-purple']};
  }
`

export const CoffeeListContainer = styled.div`
  margin-top: 7rem;

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Baloo 2', sans-serif;
  }
`
export const CoffeeList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`

export const CoffeeCard = styled.div`
  margin-top: 3rem;
  background: ${(props) => props.theme.colors['base-input']};
  width: fit-content;
  max-width: 16rem;
  border-radius: 8px 32px 8px 32px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > div {
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    margin-top: calc(-2rem - 6px);
    background: transparent;
    width: 8rem;
  }

  & .coffeeCategories {
    background: transparent;
    display: flex;
    gap: 0.5rem;
    justify-content: center;

    span {
      font-size: 0.85rem;
      color: ${(props) => props.theme.colors['brand-yellow-dark']};
      font-weight: bold;
      font-size: 0.65rem;
      padding: 0.3rem 0.6rem;
      border-radius: 16px;
      background: ${(props) => props.theme.colors['brand-yellow-light']};
    }
  }

  & .coffeeDescription {
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;

    h3 {
      font-family: 'Baloo 2', sans-serif;
      background: transparent;
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    span {
      background: transparent;
      color: ${(props) => props.theme.colors['base-label']};
      font-size: 0.875rem;
      text-align: center;
      line-height: 1.6;
    }
  }

  & .cardFooter {
    display: flex;
    background: transparent;
    align-items: center;
    flex: 1;

    span {
      background: transparent;
      color: ${(props) => props.theme.colors['base-label']};
      font-size: 0.875rem;
      margin-right: 0.5rem;

      span {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Baloo 2', sans-serif;
        color: ${(props) => props.theme.colors['base-text']};
      }
    }

    & > div {
      background: ${(props) => props.theme.colors['base-button']};
      padding: 0.2rem 0.8rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 0.5rem;
      gap: 0.5rem;

      button {
        cursor: pointer;
        border: none;
        background: transparent;
        font-size: 2rem;
        color: ${(props) => props.theme.colors['brand-purple']};
      }

      span {
        text-align: center;
        margin: 0;
      }
    }

    & > button {
      background: ${(props) => props.theme.colors['brand-purple-dark']};
      border: none;
      padding: 0.6rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      svg {
        background: transparent;
        color: ${(props) => props.theme.colors['base-white']};
      }
    }
  }
`
