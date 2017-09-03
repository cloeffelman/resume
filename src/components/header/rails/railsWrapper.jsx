import {connect} from 'react-redux'

import {Rails} from './rails'

import {
  selectSkillsSection,
  selectEducationSection,
  selectWorkSection,
  selectPortfolioSection
} from '../../../actions/menuActions/menuActions'


const mapStateToProps = state => {
  return {
    isSkillsSectionSelected: state.menu.isSkillsSectionSelected,
    isWorkSectionSelected: state.menu.isWorkSectionSelected,
    isEducationSectionSelected: state.menu.isEducationSectionSelected,
    isPortfolioSectionSelected: state.menu.isPortfolioSectionSelected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectSkillsSection: value => dispatch(selectSkillsSection(value)),
    selectEducationSection: value => dispatch(selectEducationSection(value)),
    selectWorkSection: value => dispatch(selectWorkSection(value)),
    selectPortfolioSection: value => dispatch(selectPortfolioSection(value))
  }
}

const RailsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rails)

export default RailsWrapper
