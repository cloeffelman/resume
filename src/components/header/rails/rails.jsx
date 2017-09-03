import React from 'react'
import classNames from 'classnames'

const Rails = ({...props}) => (
    <div className="rails">
      <Rail
        title="Skills"
        icon="fa-code"
        onRailClick={() => props.selectSkillsSection(true)}
        isSelected={props.isSkillsSectionSelected}
      />
      <Rail
        title="Education"
        icon="fa-graduation-cap"
        onRailClick={() =>
        props.selectEducationSection(true)}
        isSelected={props.isEducationSectionSelected}
      />
      <Rail
        title="Work"
        icon="fa-briefcase"
        onRailClick={() =>
        props.selectWorkSection(true)}
        isSelected={props.isWorkSectionSelected}
      />
      <Rail
        title="Portfolio"
        icon="fa-address-card-o"
        onRailClick={() =>
        props.selectPortfolioSection(true)}
        isSelected={props.isPortfolioSectionSelected}
      />
    </div>
)

const Rail = ({...props}) => (
  <div className={classNames("rail", {"selected": props.isSelected})} onClick={props.onRailClick}>
    <div className="hover-highlight"/>
    <h1 className="title">{props.title}</h1>
    <i className={`icon fa ${props.icon}`}/>
  </div>
)

export {Rails}
