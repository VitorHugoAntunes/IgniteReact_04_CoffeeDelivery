import styled from 'styled-components'

export const NavBar = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ActionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
  }

  svg {
    background: transparent;
  }

  .location {
    background: ${(props) => props.theme.colors['brand-purple-light']};

    svg {
      color: ${(props) => props.theme.colors['brand-purple']};
    }
  }

  .cart {
    background: ${(props) => props.theme.colors['brand-yellow-light']};
    border: none;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      color: ${(props) => props.theme.colors['brand-yellow-dark']};
    }
  }
`
