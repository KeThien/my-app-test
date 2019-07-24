'use strict'

const e = React.createElement

class MyApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: false }
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.'
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    )
  }
}
const domContainer = document.querySelector('#my-app')
ReactDOM.render(e(MyApp), domContainer)
