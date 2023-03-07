import { CoffeeList, Intro, IntroItens, Title } from './styles'
import introImage from '../../assets/Imagem.png'

export function Home() {
  return (
    <>
      <Intro>
        <div>
          <Title>
            <h1>Titulo</h1>
            <p>Texto abaixo do titulo</p>
          </Title>
          <IntroItens>
            <span>Item</span>
            <span>Item</span>
            <span>Item</span>
            <span>Item</span>
          </IntroItens>
        </div>
        <img src={introImage} alt="Intro Image" />
      </Intro>

      <CoffeeList>
        <h2>Nossos cafes</h2>

        <div>
          <img src="" alt="Coffee type" />
          <div>
            <div>
              <span>coffee categories</span>
            </div>
            <div>
              <h3>Coffee Title</h3>
              <span>Coffee description</span>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </CoffeeList>
    </>
  )
}
