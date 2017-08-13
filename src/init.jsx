import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

import {ResumeApp} from './components/resumeApp/resumeApp'

Provider.childContextTypes = {
  store: PropTypes.object,
  storeSubscription: PropTypes.func
}

ReactDOM.render(
    <ResumeApp/>,
  document.getElementById('root')
)
