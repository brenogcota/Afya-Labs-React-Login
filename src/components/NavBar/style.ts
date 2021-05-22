import styled from 'styled-components'

export const NavBarContent = styled.nav`
  background: #FFF;
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #e2e2ee;

  img{
    height: 45px;
    width: auto;
  }

  .links-content{
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a{
      text-decoration: none;
      background: #fff;
      padding: 12px;
      border-radius: 12px;
      color: #F71755;
      text-transform: uppercase;
      font-weight: bold;
      transition: 0.3s;

      &:hover{
        background: #e2e2ee;
      }
    }
  }
`