import styled from "styled-components";

export const Container = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:100vh;
`;

export const Content = styled.section`
  border:1px solid #fff;
  width: 50%;
  height:auto;
  padding:2rem;
  h1{
    padding:1rem
  }
`;

export const SearchUser = styled.form`
  border-radius:8px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  padding:2rem;
  align-items:center;
  background-color:${props => props.theme.colors["blue-600"]};
  input{
    background-color:transparent;
    color:#fff;
    border:0;
    margin-left:1.2rem;
    width:70%;
    padding:1rem;
    font-size:20px
  }
  input::placeholder{
      color:#fff;
      font-size:20px
    }
  input:focus{
    border:0
  }
  button{
    background-color:${props => props.theme.colors["blue-200"]};
    border:none;
    color:#fff;
    padding:1rem;
    width:20%;
    font-weight:700;
    cursor: pointer;
    border-radius:8px;
    margin-left:1rem;
    font-size:20px
  }
`;

export const UserContent = styled.section`
  padding:4rem;
  display:flex;
  margin-top:15px;
  border:1px solid #fff;
  img{
    border-radius:50%;
    height:150px;
    margin-right:10px;
  }
  background-color:${props => props.theme.colors["blue-600"]};
`;

export const UserHeader = styled.section`
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-rows: auto auto 150px;
  align-items:center;
  justify-items:center;
  gap:10px;

  p:nth-child(1) {
    grid-column: 1 / span 2;
    justify-self: start;
  }

  span:nth-child(2) {
    grid-column: 1 / span 2;
    justify-self: start;
  }

  span:nth-child(3) {
    grid-column: 3;
    justify-self: end;
  }

  p:nth-child(4) {
    grid-column: 1 / span 3;
    justify-self: center;
  };

  

`;

export const GitInfo = styled.section`
  border-radius:8px;
  background-color:${props => props.theme.colors["blue-400"]};
  padding:2rem;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  grid-template-rows:repeat(2,auto);
  text-align:center;
  gap:10px;
  p{
    grid-row:1;
  }
  span{
    grid-row:2;
  }  
  
`;

export const SocialLinks = styled.footer`
    margin-top:1rem;
    display:grid;
    grid-template-columns:40px 1fr 40px 1fr;
    grid-template-rows:repeat(4,auto);
    gap: 10px 20px;
    align-items:center;
    justify-content:center;
    p,a,span{
      margin:0;
      text-decoration:none;
      color: ${props => props.theme.colors["white"]};
    }
    svg{
       margin-right: 10px;
    }
    a{
      max-width:10ch
    }
`;