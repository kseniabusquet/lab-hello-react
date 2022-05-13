import './App.css';
import './components/Header.css';
import './components/MainContent.css';
import './components/ReactFeatures.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ReactFeatures from './components/ReactFeatures';


function App() {
  return (
    <div className="App">
      <div className = "Wrapper">
      <Header />
      <MainContent />
      </div>
      <ReactFeatures />
     </div>
  );
}
export default App;
