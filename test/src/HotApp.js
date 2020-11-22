import React from 'react'
import App from './App'
import {hot} from 'react-hot-loader/root'

function HotApp() {
    return <App/>
}

export default hot(HotApp)