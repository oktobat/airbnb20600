import {Outlet} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout