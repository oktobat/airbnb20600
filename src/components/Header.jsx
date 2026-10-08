import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { TbBrandAirbnb } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const HeaderBlock = styled.header`
    padding:20px 0;
    .row { 
        display:flex; 
        justify-content:space-between;
        align-items:center;
        h1 { font-size:50px; color:red }
        nav { .depth1 { display:flex; li {margin:0 10px} } }
        .mobNav { 
          span { padding:10px; background:#eee; border-radius:50%; font-size:25px; } 
          .hosting { background:none; font-size:20px }
        }
    }
`

const Header = () => {
  return (
    <HeaderBlock>
        <div className="row">
            <h1><Link to="/"><TbBrandAirbnb /></Link></h1>
            <nav>
                <ul className="depth1">
                    <li>전체</li>
                    <li>숙소</li>
                    <li>체험</li>
                    <li>서비스</li>
                </ul>
            </nav>
            <div className="mobNav">
                <span className="hosting">호스팅하기</span>
                <span><Link to="/join"><FaRegUserCircle /></Link></span>
                <span><GiHamburgerMenu /></span>
            </div>
        </div>
    </HeaderBlock>
  )
}

export default Header
