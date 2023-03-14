import './App.css';

/*
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/evento/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
*/
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
/*
  const name = 'Matheus'

  const meusItens = ['React', 'Vue', 'Angular']

  const [nome, setNome] = useState()

  function sum(a, b){
    return a+b
  }
*/
  return (
    
    /*
      <div className="App">
        <h1>Olá React!</h1>
        <p>Ola {name}</p>
        <p>Soma: {sum(1,5)}</p>
        <HelloWorld />
        <SayMyName nome = "Matheus" />
        <Pessoa 
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
          foto="https://via.placeholder.com/150"
          />
        <List />
        <Evento />
        <Evento />
        <Form />

        <h1>Renderização Condicional</h1>
        
        <Condicional />

        <h1>Renderização de Listas</h1>
        <OutraLista itens={meusItens} />
        <OutraLista itens={[]} />
        
        <h1>State Lift</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
        </div>
        */
   <Router>
     <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
