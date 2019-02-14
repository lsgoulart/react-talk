import React from 'react'

const withCounter = Component => {
  return class ComponentWithCounter extends React.Component {
    state = {
      count: 0
    }

    handleDecrement = () => {
      this.setState(prevState => ({ count: prevState.count - 1 }))
    }

    handleIncrement = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
      const { count } = this.state

      return (
        <Component
          {...this.props}
          count={count}
          onIncrease={this.handleIncrement}
          onDecrease={this.handleDecrement}
        />
      )
    }
  }
}

const App = ({ count, onIncrease, onDecrease }) => {
  return (
    <div>
      <div>Current count: {count}</div>
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  )
}

const AppWithCounter = withCounter(App)
export default AppWithCounter
