import Button from './components/Button'
import Comment from './components/Comment'
import Props from './components/Props'
import List from './List/index'
import Boolean from './Boolean/index'

import './app.css'
// let List = require('./list/list')
function App() {
  return (
    <div className="App">
      Hello React
      {/* <List></List>  */}
      {/* {Boolean()} */}
      {/* <div>
        <h1>components</h1>
        <Button></Button>
      </div> */}
      {/* <Comment></Comment> */}
      <Props></Props>
    </div>
  );
}

export default App;
