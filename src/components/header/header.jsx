import React, {Component} from 'react'
import classNames from 'classnames'

import RailsWrapper from './rails/railsWrapper'

class Header extends Component {
  render(){
    return(
      <div className={classNames("header", {"showing-section": this.props.isSectionSelected})}>
        <div className="close" onClick={this.props.closeSection}/>
        <div className="profile-image"/>
        <RailsWrapper/>
      </div>
    )
  }
}

export default Header
