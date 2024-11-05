
import { Board } from './components/Boards'
import { Options } from './components/Options'
import { Records } from './components/Records'

function App() {
  return (
    <main className="game">
      <section className="game-board">
        <h1 className="game-h1"><span className="h1-hit">HIT</span> THE <span className="h1-light">LIGHT</span></h1>
        <Board />
        <Options />
      </section>
      <Records />
    </main>
  )
}

export default App
