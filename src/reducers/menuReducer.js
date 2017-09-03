import {combineReducers} from 'redux'

import {
  SELECT_SKILLS_SECTION,
  SELECT_EDUCATION_SECTION,
  SELECT_WORK_SECTION,
  SELECT_PORTFOLIO_SECTION
} from '../actions/menuActions/menuActionTypes'

const isSkillsSectionSelected = (state = false, action) => {
  switch(action.type){
    case SELECT_SKILLS_SECTION:
      return action.value
    default:
      return state
  }
}

const isEducationSectionSelected = (state = false, action) => {
  switch(action.type){
    case SELECT_EDUCATION_SECTION:
      return action.value
    default:
      return state
  }
}

const isWorkSectionSelected = (state = false, action) => {
  switch(action.type){
    case SELECT_WORK_SECTION:
      return action.value
    default:
      return state
  }
}

const isPortfolioSectionSelected = (state = false, action) => {
  switch(action.type){
    case SELECT_PORTFOLIO_SECTION:
      return action.value
    default:
      return state
  }
}

const menu = combineReducers({
  isSkillsSectionSelected,
  isEducationSectionSelected,
  isWorkSectionSelected,
  isPortfolioSectionSelected
})

export {menu}
