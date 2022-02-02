
import './App.css';
import './components/keyboard/keyboard'
import KeyBoard from './components/keyboard/keyboard';
import PhraseBoard from './components/word/phrase/phrase'
import styled, {css} from 'styled-components'

function App() {
  return (
    <div>
      <PhraseBoard/>
      <br></br>
      <KeyBoard/>
    </div>
  );
}

export default App;
