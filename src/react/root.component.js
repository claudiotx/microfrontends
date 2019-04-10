
import React from 'react'
import e from '../event-bus'

export default class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'When Angular receives message, we should see a confirmation here 😎'
    }

    this.messageHandler = this.messageHandler.bind(this)
  }

  componentDidMount() {
    e.on('received', this.messageHandler)
  }

  componentDidUnmount() {
    e.off('received', this.messageHandler)
  }

  messageHandler(message) {
    this.setState({
      message: message.text
    })
  }

  sendMessage(evt) {
    evt.preventDefault();
    e.emit('message', { text: 'Hello from React 👋' })
  }

  render() {
    return (
      <main className="w-100 bt b--black-10 bg-white">
      <section className="bg-black-0125 w-100">
        <article className="pb4">
          <div className="ph3 ph5-ns">
            <div className="cf mw9 center tc-m">
              <div className="pb3 pb4-ns pt4 pt5-ns mt4 black-70 fl-l w-50-l">
                <h1 className="f4 fw6 f1-ns lh-title measure mt0">
                  Main Section built by React 15
                </h1>
                <p className="f5 f4-ns fw4 b measure dib-m lh-copy">
                  Create fast loading, highly readable, and
                  100% future proof Complex Front End Apps
                </p>
                <p className="measure f5 f4-ns lh-copy dn">
                  https://www.coderecipes.org
                  {this.state.message}
                </p>
              </div>
              <div className="fl-l w-50-l tl tc-ns pt3 pt4-m pt6-l">
                <a className="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" href="javascript:;" onClick={this.sendMessage}>
                  Send a message! <code className="f6 fw4 di">easter-eggs</code>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
      </main>
    )
  }
}