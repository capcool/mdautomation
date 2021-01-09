import './App.css';
import TopAppBar from './Components/topAppBar';
import BottomAppBar from './Components/bottomAppBar';
import FirstComponent from './Components/FirstComponent';
import CardComponent from './Components/CardComponent';
import ClientComponent from './Components/ClientComponent';


function App() {
  return (
    <div>
      <TopAppBar/>
      <FirstComponent/>
      <CardComponent/>
      <ClientComponent/>
      <BottomAppBar/>
      </div>
  );
}

export default App;
