import Button from './components/Button'
import Comment from './components/Comment'
import List from './List/index'
import Boolean from './Boolean/index'

// let List = require('./list/list')
function App() {
  return (
    <div className="App">
      Hello React
      <List></List> 
      {Boolean()}
      <div>
        <h1>components</h1>
        <Button></Button>
      </div>
      <Comment></Comment>
    </div>
  );
}

export default App;
