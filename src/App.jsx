import './App.css'
import Inicio from './assets/Componentes/Telas/Inicio'
import { AppProvider } from './assets/Context'


function App() {

  return (
    <AppProvider>

        <Inicio />

    </AppProvider>
  )
}

export default App
