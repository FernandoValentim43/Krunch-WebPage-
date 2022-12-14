import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;

  img {
    height: 100% !important;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(77, 140, 245, 0.8);
  }

  &:hover .overlay {
    opacity: 1;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 15px;
    line-height: 28px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .default {
    display: none;
  }


  
`;
