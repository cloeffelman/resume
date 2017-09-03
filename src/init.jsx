import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

import {ResumeApp} from './components/resumeApp/resumeApp'

import resumeStore from './store/resumeStore'

Provider.childContextTypes = {
  store: PropTypes.object,
  storeSubscription: PropTypes.func
}

ReactDOM.render(
    <Provider store={resumeStore}>
      <ResumeApp/>
    </Provider>,
  document.getElementById('root')
)
