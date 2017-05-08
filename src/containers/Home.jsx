import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as todoActions from '../actions/todos'

class Home extends Component {

  componentDidMount() {
    this.props.actions.fetchTodos()
  }

  render() {
    return (
      <div>Hello home {this.props.todos.name}
      </div>
    )
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {todos: state.todos}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
