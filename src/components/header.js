import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css' /*IMPORTING FROM CSS*/

/*
STATELESS HEADER
const Header = ({ siteTitle }) => (
  <div className = "Header">
    <div className = "HeaderGroup">
      <Link to = "/"><img src = {require('../images/logo-designcode.svg')}/></Link>
      <Link to = "/courses">Courses</Link>
      <Link to = "/downloads">Downloads</Link>
      <Link to = "/workshops">Workshops</Link>
      <Link to = "/buy"><button>Buy</button></Link>
    </div>
  </div>
)
*/

/*
CREATING A STATEFUL HEADER
*/
class Header extends React.Component {
  constructor(props) {
    super(props)
  
    /* Initial state */
    this.state = {
      hasScrolled: false
    }
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  render() {
    return (
      <div className = {this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className = "HeaderGroup">
          <Link to = "/"><img alt = "Design Code's logo, a D made of multiple blue triangles of different hues" src = {require('../images/logo-designcode.svg')}/></Link>
          <Link to = "/courses">Courses</Link>
          <Link to = "/downloads">Downloads</Link>
          <Link to = "/workshops">Workshops</Link>
          <Link to = "/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
