function Landing({ onStarted }) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">venus Amharic Lit Hub</h1>
        <p className="landing-subtitle"> venus አማርኛ ሥነ ጽሑፍ</p>
        <p className="landing-desc">
          Free Ethiopian Literature | ነፃ የኢትዮጵያ ሥነ ጽሑፍ
        </p>
        <button className="start-btn" onClick={onStarted}>
          Let's Start | ይቀጥሉ
        </button>
      </div>
    </div>
  );
}

export default Landing;