import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #222222;
  width: 100%;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 22px 0px 10px 0px;
  margin-top: 60px;

  
  width:100%;
  

  @media only screen and (max-width: 1060px) {

    height: 70px;

    a {
      display:none;
    }

    .about {
      display: none !important;
    }

  }


  a {
    font-size: 13px !important;
    line-height: 1;
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
  }

  .links {
    display: flex;
    justify-content: space-around;
    width: 330px;
    padding: 18px;
    padding-bottom: 10px;
  }

  .about {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }

  .about-text {
    font-size: 14px;
    display: flex;
    justify-content: center;
    color: #777;
    text-transform: uppercase;
    
    line-height: 1;
  }
`;
