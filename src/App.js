import { useState } from 'react';
import './App.css';
import MathJax from 'react-mathjax';
// import TextAreaLine from './components/TextAreaLine';

const texOrigin = `
f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi
    $$ f(x) =
`;

function App() {
  const [tex, setTex] = useState(texOrigin);
  return (
    <div className="App">
      <textarea
        rows={15}
        value={tex}
        onChange={(e) => setTex(e.target.value)}
      ></textarea>
      <MathJax.Provider>
        <div>
          This is an inline math formula:{' '}
          <MathJax.Node inline formula={'a = b'} />
          And a block one:
          <MathJax.Node formula={tex} />
        </div>
      </MathJax.Provider>
    </div>
  );
}

export default App;
