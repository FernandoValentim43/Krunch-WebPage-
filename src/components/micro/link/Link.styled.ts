import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;

  a {
    text-transform: uppercase;
    color: white;
    font-size: 1rem;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    color: #4d8cf5;
  }
`;