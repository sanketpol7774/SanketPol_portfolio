import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";





function Footer() {
  return (

    <>

      <div id="footar">

      <div className="link">
  <a
    href="https://www.linkedin.com/in/sanket-pol7774"
    target="_blank"
    rel="noopener noreferrer"
  >
    <CiLinkedin className="abc" /> Linkedin
  </a>

  <a
    href="https://github.com/sanketpol7774"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithubSquare className="abc" /> GitHub
  </a>

  <a href="tel:+917774880287">
    <IoCallOutline className="abc" /> Call
  </a>

  <a
    href="mailto:polsanket60@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MdOutlineMail className="abc" /> Email
  </a>
</div>



        <footer>
          {<p>©2025 Sanket Pol. All rights reserved.</p>}
        </footer>
      </div>

    </>
  )
}

export default Footer  
