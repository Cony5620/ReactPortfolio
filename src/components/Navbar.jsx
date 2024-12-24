
import logo from '../assets/C_logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-12' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/chitwai-phyo-45a1332b7/"><FaLinkedin/></a>
            <a href="https://github.com/Cony5620"><FaGithub/></a>
            <a href="https://www.facebook.com/share/tkxJWutnWbiRqonW/?mibextid=kFxxJD"><FaFacebook/></a>
            <MdEmail/>
        </div>
    </nav>
  )
}

export default NavBar