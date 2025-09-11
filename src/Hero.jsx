import img from './assets/dev2.png'

function Hero() {
  return (
    <div id="hero">
    
      <div className="left">
      <h1>I’m <br /> <span>Sanket Pol</span></h1>
      <h2>Frontend Developer</h2>
      <p>I’m a passionate frontend developer specializing in building interactive and responsive web applications.</p>
  <a href="/Sanket_Pol_Resume.pdf" download="Sanket-Pol-Resume.pdf">
  <button>Download Resume</button>
</a>

      </div>

      
<div className="right">
    <img src={img} alt="Profile" className="profile-img"  height='100%' />
</div>

    </div>
  )
}
export default Hero
