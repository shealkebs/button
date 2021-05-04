import logo from './logo.svg';
import './App.css';
import SimpleErrorAlert from './Component/errors/SimpleErrorAlert';

function App() {
  return (
    <div className="App">
            <SimpleErrorAlert
        errors={[{
          message: 'You must be logged in to use this application',
          exception: 'If you are not logged in momentarily, please try refreshing the page'
        }]}
        show={true}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <SimpleErrorAlert
        errors={[{
          message: 'You must be logged in to use this application',
          exception: 'If you are not logged in momentarily, please try refreshing the page'
        }]}
        show={true}
      />
    </div>
  );
}

export default App;
