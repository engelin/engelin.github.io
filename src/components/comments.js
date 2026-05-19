import * as React from 'react'

export default class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.commentBox = React.createRef()
  }

  componentDidMount() {
    const scriptEl = document.createElement('script')
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    scriptEl.setAttribute('async', 'true')
    scriptEl.setAttribute('repo', 'engelin/engelin.github.io')
    scriptEl.setAttribute('issue-term', 'title')
    scriptEl.setAttribute('theme', 'github-light')
    this.commentBox.current.appendChild(scriptEl)
  }

  render() {
    return (
      <section className="comment-section">
        <h2>Discussion</h2>
        <div ref={this.commentBox} className="comment-box" />
      </section>
    )
  }
}
