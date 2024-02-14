import ConfigureButton from './components/ConfigureButton';
import Header from './components/Header';
import ImageStatusContextProvider from './store/context';

function App() {
  return (
    <ImageStatusContextProvider>
      <Header />
      <ConfigureButton />
    </ImageStatusContextProvider>
  );
}

export default App;
