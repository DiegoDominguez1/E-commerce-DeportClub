import './App.css';
import 'bootsrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvendos a DeportClub'}/>
    </>
  );
}

export default App;
