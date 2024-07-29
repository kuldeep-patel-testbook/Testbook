import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
          <h1>React Card Component</h1>
      </div>
      <div className="cards">
          <Card />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <div className="card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png" alt="img" />
      <h2>Title of the Card</h2>
      <p>Caption text about the Card</p>
      <h5>Author name</h5>
    </div>
  );
}
export default App;
