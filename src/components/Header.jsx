import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'
function Header(){
  
    const props = {
      items: [
        {
          text: 'Home',
          link: '/'
        },
        {
          text: 'Doners',
          link: '/hme'
        },
        {
          text: 'NGOs',
          link: '/ngo'
        },
        {
          text: 'Contact Us',
          link: '#contact'
        }
      ],
      logo: {
        text: 'Apnapan'
      },
      style: {
        barStyles: {
          background: 'black'
        },
        sidebarStyles: {
          background: 'beige',
          buttonColor: 'white'
        }
      
    }
   
  }
      return(
          <>
        <Navbar {...props} />
  
          </>
      )
  }
  export default Header;
