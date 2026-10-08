import styled from 'styled-components'

const LoginBlock = styled.div`
 padding-top:100px;
 h2 { text-align:center }
 form { border:0px solid #000;
  max-width:400px; margin:20px auto;
  input { display:block; width:100%; padding:20px 10px; margin-bottom:20px; border:1px solid #999; border-radius:10px; }  button { display:block; width:100%; padding:20px 10px; border-radius:10px; background:pink  }
 }
`

const Login = () => {
  return (
        <LoginBlock className="row">
          <h2>로그인 또는 회원 가입</h2>
          <form>
            <input placeholder="이메일" type="text" />
            <button type="submit">계속</button>
          </form>
        </LoginBlock>
  )
}

export default Login