
import List from './List/index'
import Boolean from './Boolean/index'
// let List = require('./list/list')
function App() {
  return (
    <div className="App">
      Hello React
      <List></List>
      <Boolean></Boolean>
      {Boolean()}
    </div>
  );
}

export default App;
