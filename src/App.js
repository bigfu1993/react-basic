
import './app.css'

import Button from './components/Button'
import Comment from './components/Comment'
import List from './components/List'
import Boolean from './components/Boolean'
import Props from './Props'
import PropsContext from './Props/Context'
import Effect from './Effect/index'
import Hook from './Hook/index'

function App() {
  return (
    <div className="App">
      Hello React

      <Comment></Comment>

      {/* <List></List> */}
      {/* {Boolean()} */}
      {/* <div>
        <h1>components</h1>
        <Button></Button>
      </div> */}
      {/* <Props></Props> */}
      {/* <PropsContext></PropsContext> */}
      {/* <Effect></Effect> */}
      <Hook></Hook>
    </div>
  );
}

export default App;
