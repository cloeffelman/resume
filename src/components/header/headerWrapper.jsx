import {connect} from 'react-redux'

import Header from './header'

import {
  selectSkillsSection,
  selectEducationSection,
  selectWorkSection,
  selectPortfolioSection
} from '../../actions/menuActions/menuActions'

const mapStateToProps = state => {
  const isSectionSelected = Object.values(state.menu).some(item => item)

  return {
    isSectionSelected
  }
}

const mapDispatchToProps = dispatch => {
  const closeSection = () => {
    dispatch(selectSkillsSection(false))
    dispatch(selectEducationSection(false))
    dispatch(selectWorkSection(false))
    dispatch(selectPortfolioSection(false))
  }

  return {
    closeSection: () => closeSection()
  }
}

const HeaderWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderWrapper
