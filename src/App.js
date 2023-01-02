import logo from './logo.svg'
import './App.css'

import { UseEffectComponent } from './UseEffectComponent/UseEffectComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UseEffectComponent />
      </header>
    </div>
  )
}

export default App
