import './App.css'
import FavColor from './components/FavColor'

function App() {
  const userData = {
    uname: 'john',
    umarks:100
  }

  return (
    <>
    <FavColor name="Kuldeep Patel" color="Blue Ocene" refine={10} {...userData}  />
    </>
  )
}

export default App
