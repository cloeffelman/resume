import {combineReducers} from 'redux'

import {menu} from './menuReducer'

const indexReducer = combineReducers({
  menu
})

export {indexReducer}
