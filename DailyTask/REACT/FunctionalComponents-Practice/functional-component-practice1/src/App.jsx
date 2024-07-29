import './App.css'
import Practice1 from './components/Practice1'
import Practice2 from './components/Practice2'
import Practice3 from './components/Practice3'
import Practice4 from './components/Practice4'
import Person from './components/Person'
import Practice5 from './components/Practice5'
import FirstComponet from './components/FirstComponet'
import Header from './components/Header'
import MainBar from './components/MainBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim doloremque vel molestiae assumenda earum magnam nobis officia, excepturi, aspernatur vitae perspiciatis ex aut accusamus ullam, doloribus deleniti nihil! Laudantium!</p>
      <p></p>
      <MainBar />
      <FirstComponet />
      <Practice1 />
      <Practice2 />
      <Practice3 text="Hello I am prop this is my side" />
      <Practice4 />

      <Person name="Kuldeep" age="31" />

      <Practice5 />
    </>
  )
}

export default App
