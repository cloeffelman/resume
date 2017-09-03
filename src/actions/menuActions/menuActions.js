import {
  SELECT_SKILLS_SECTION,
  SELECT_EDUCATION_SECTION,
  SELECT_WORK_SECTION,
  SELECT_PORTFOLIO_SECTION
} from './menuActionTypes'

const selectSkillsSection = value => {
  return{
    type: SELECT_SKILLS_SECTION,
    value
  }
}

const selectEducationSection = value => {
  return{
    type: SELECT_EDUCATION_SECTION,
    value
  }
}

const selectWorkSection = value => {
  return{
    type: SELECT_WORK_SECTION,
    value
  }
}

const selectPortfolioSection = value => {
  return{
    type: SELECT_PORTFOLIO_SECTION,
    value
  }
}

export {
  selectSkillsSection,
  selectEducationSection,
  selectWorkSection,
  selectPortfolioSection
}
