import './App.css'
import Container from './components/Container'
import LifeCycle from './components/LifeCycle'
// import Header from './components/Header'
// import HeaderOne from './components/HeaderOne'


function App() {
  return (
    <div className='App'>
      {/* <Header favcol="Blue" /> */}
      {/* <Header /> */}
      {/* <HeaderOne /> */}
      <Container />

      <LifeCycle />
    </div>
  )
}

export default App

/*export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouritecolor: "red"
    };
    console.log("Constructor Called");
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log("static getDerivedStateFromProps Called");
  //   return { favouritecolor: props.favcol };
  // }
 componentDidMount() {
  console.log("componentDidMount Called");
  setTimeout(() => {
    this.setState ({ favouritecolor : "Yellow" });
  }, 5000);
 }
  render() {
    console.log("Render Called");
    return (
      //console.log("Return Called")
      <h1>My Favourite Color is {this.state.favouritecolor} </h1>
    )
  }
}*//*export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouritecolor: "red"
    };
    console.log("Constructor Called");
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log("static getDerivedStateFromProps Called");
  //   return { favouritecolor: props.favcol };
  // }
 componentDidMount() {
  console.log("componentDidMount Called");
  setTimeout(() => {
    this.setState ({ favouritecolor : "Yellow" });
  }, 5000);
 }
  render() {
    console.log("Render Called");
    return (
      //console.log("Return Called")
      <h1>My Favourite Color is {this.state.favouritecolor} </h1>
    )
  }
}*/
