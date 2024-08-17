import styled from "styled-components";

export const Container = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:100vh;
`;

export const Content = styled.section`
  width: 50%;
  height:auto;
  padding:2rem;
  h1{
    padding:1rem
  }
  @media ${props => props.theme.breakpoints.tablet} {
    padding:1rem;
    width:90%
  }
  @media ${props => props.theme.breakpoints.phone} {
    padding:1rem;
    width:100%
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
    font-size:20px;
    
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
    @media ${props => props.theme.breakpoints.tablet} {
    padding:1rem;
    button{
      width:30%
    }
  }
  @media ${props => props.theme.breakpoints.phone} {
    font-size:10px;
    text-align:center;
    button{
      width:35%;
      font-size:15px;
    };
  }
`;

export const UserContent = styled.section`
  padding:4rem;
  display:flex;
  margin-top:15px;
  border-radius:8px;
  img{
    border-radius:50%;
    height:150px;
    margin-right:10px;
  }
  background-color:${props => props.theme.colors["blue-600"]};
  @media ${props => props.theme.breakpoints.tablet} {
    padding:1.5rem;
  }
  @media ${props => props.theme.breakpoints.phone} {
    padding:1rem;
    flex-direction: column;
    img{
      height:70px;
      width:70px;
      align-self:center;
       margin-right:0px;
    }
  }
`;

export const UserHeader = styled.section`
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-rows: auto auto 150px;
  align-items:center;
  justify-items:center;
  gap:10px;

  p:nth-child(1) {
    grid-column: 1;
    justify-self: start;
  }

  span:nth-child(2) {
    grid-column: 1 ;
    justify-self: start;
  }

  span:nth-child(3) {
    grid-column: 3;
    justify-self: end;
  }

  p:nth-child(4) {
    grid-column: 1 /4;
    justify-self: center;
  };

  @media ${props => props.theme.breakpoints.tablet} {
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows: auto auto 50px;
    align-items:center;
    justify-items:center;
    gap:5px   
  }
  @media ${props => props.theme.breakpoints.phone} {
   display:flex;
   justify-content:center;
   flex-direction:column;
   :last-child{
    margin-top:15px;
    max-width:350px;
    text-align:center;
    padding-bottom:40px;
   }
  }
  
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
  @media ${props => props.theme.breakpoints.phone} {
    padding:20px;
    gap:5px;
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
    @media ${props => props.theme.breakpoints.phone} {
        grid-template-columns:40px 1fr ;
        grid-template-rows:2
    }
`;