import {
  CoffeeCard,
  CoffeeList,
  CoffeeListContainer,
  Intro,
  IntroContainer,
  IntroIcon,
  IntroItens,
  Title,
} from './styles'
import introImage from '../../assets/Imagem.png'
import { ShoppingCart } from 'phosphor-react'

import CoffeeImg from '../../assets/Type=Americano.png'

export function Home() {
  return (
    <IntroContainer>
      <Intro>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <IntroItens>
            <div>
              <div>
                <IntroIcon className="cart">
                  <ShoppingCart size={16} weight="fill" />
                </IntroIcon>
                <span>Compra mais simples e segura</span>
              </div>
              <div>
                <IntroIcon className="stock">
                  <ShoppingCart size={16} weight="fill" />
                </IntroIcon>
                <span>Compra mais simples e segura</span>
              </div>
            </div>

            <div>
              <div>
                <IntroIcon className="clock">
                  <ShoppingCart size={16} weight="fill" />
                </IntroIcon>
                <span>Compra mais simples e segura</span>
              </div>
              <div>
                <IntroIcon className="coffee">
                  <ShoppingCart size={16} weight="fill" />
                </IntroIcon>
                <span>Compra mais simples e segura</span>
              </div>
            </div>
          </IntroItens>
        </div>
        <img src={introImage} alt="Intro Image" />
      </Intro>

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          <CoffeeCard>
            <img src={CoffeeImg} alt="Coffee type" />
            <div>
              <div className="coffeeCategories">
                <span>TRADICIONAL</span>
                <span>ALCOOLICO</span>
              </div>
              <div className="coffeeDescription">
                <h3>Expresso Tradicional</h3>
                <span>
                  O tradicional café feito com água quente e grãos moídos
                </span>
              </div>
              <div className="cardFooter">
                <span>
                  R$ <span>9,90</span>
                </span>
                <div>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeCard>
          <CoffeeCard>
            <img src={CoffeeImg} alt="Coffee type" />
            <div>
              <div className="coffeeCategories">
                <span>TRADICIONAL</span>
                <span>ALCOOLICO</span>
              </div>
              <div className="coffeeDescription">
                <h3>Expresso Tradicional</h3>
                <span>
                  O tradicional café feito com água quente e grãos moídos
                </span>
              </div>
              <div className="cardFooter">
                <span>
                  R$ <span>9,90</span>
                </span>
                <div>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeCard>
          <CoffeeCard>
            <img src={CoffeeImg} alt="Coffee type" />
            <div>
              <div className="coffeeCategories">
                <span>TRADICIONAL</span>
                <span>ALCOOLICO</span>
              </div>
              <div className="coffeeDescription">
                <h3>Expresso Tradicional</h3>
                <span>
                  O tradicional café feito com água quente e grãos moídos
                </span>
              </div>
              <div className="cardFooter">
                <span>
                  R$ <span>9,90</span>
                </span>
                <div>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeCard>
          <CoffeeCard>
            <img src={CoffeeImg} alt="Coffee type" />
            <div>
              <div className="coffeeCategories">
                <span>TRADICIONAL</span>
                <span>ALCOOLICO</span>
              </div>
              <div className="coffeeDescription">
                <h3>Expresso Tradicional</h3>
                <span>
                  O tradicional café feito com água quente e grãos moídos
                </span>
              </div>
              <div className="cardFooter">
                <span>
                  R$ <span>9,90</span>
                </span>
                <div>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeCard>
        </CoffeeList>
      </CoffeeListContainer>
    </IntroContainer>
  )
}
