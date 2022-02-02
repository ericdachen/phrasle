
import './App.css';
import './components/keyboard/keyboard'
import KeyBoard from './components/keyboard/keyboard';
import PhraseBoard from './components/word/wordbox/wordbox'

function App() {
  return (
    <div>
      <PhraseBoard/>
      <KeyBoard/>
    </div>
  );
}

export default App;
