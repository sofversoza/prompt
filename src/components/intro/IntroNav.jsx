import './Intro.css'

export default function IntroNav() {
  return (
    <div className="intro-nav">
      <div className="left">prompt.</div>
      <div className="right">
        <ul>
          <li>Sign in</li>
          <li className="register">Get Started</li>
        </ul>
      </div>
    </div>
  )
}
