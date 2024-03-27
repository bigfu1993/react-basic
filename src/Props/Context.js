import { createContext, useContext } from 'react'
let MsgContext = createContext()
function Son() {
    let msg = useContext(MsgContext)
    return <div>SON:{msg}</div>
}
function Father({ children }) {
    return (<div>FATHER{children}</div>)
}
function Context() {
    let appdata = 'app data'
    return (
        <MsgContext.Provider value={appdata}>
            <Father><Son></Son></Father>
        </MsgContext.Provider>
    )
}

export default Context