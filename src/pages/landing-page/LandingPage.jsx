import './LandingPage.css'
import IntroHeader from '../../components/intro/IntroHeader'
import IntroNav from '../../components/intro/IntroNav'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="intro-cont">
        <IntroNav />
        <IntroHeader />
      </div>

    </div>
  )
}
