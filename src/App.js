
import { BrowserRouter as Router,  Switch , Route } from "react-router-dom";
import home from './pages/home';
function App() {
  return (
    <div >
       <Router> 
     <Switch>
     <Route path="/" exact  component={home} />
     
     </Switch>        
      </Router>
    </div>
  );
}

export default App;
