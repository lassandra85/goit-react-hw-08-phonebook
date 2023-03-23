import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const bubblingAnimate = keyframes`
   0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`;

export const Area = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const Circles = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CirclesItem = styled.li`
  position: absolute;
  bottom: -150px;
  display: block;
  color: rgba(47, 47, 47, 0.6);
  width: 20px;
  height: 20px;
 /*  #ebf5fc */
  list-style: none;
  background-color: rgba(255, 255, 255, 0.5);
  animation: ${bubblingAnimate} 25s linear infinite;
  &:nth-of-type(1) {
    left: 25%;
    width: 80px;
    height: 40px;
    animation-delay: 0s;
  }
  &:nth-of-type(2) {
    left: 10%;
    width: 80px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 12s;
  }
  &:nth-of-type(3) {
    left: 70%;
    width: 40px;
    height: 20px;
    animation-delay: 4s;
  }
  &:nth-of-type(4) {
    left: 40%;
    width: 100px;
    height: 80px;
    animation-delay: 0s;
    animation-duration: 18s;
  }
  &:nth-of-type(5) {
    left: 65%;
    width: 70px;
    height: 40px;
    animation-delay: 0s;
  }
  &:nth-of-type(6) {
    left: 75%;
    width: 110px;
    height: 20px;
    animation-delay: 3s;
  }
  &:nth-of-type(7) {
    left: 35%;
    width: 150px;
    height: 20px;
    animation-delay: 7s;
  }
  &:nth-of-type(8) {
    left: 50%;
    width: 70px;
    height: 40px;
    animation-delay: 15s;
    animation-duration: 45s;
  }
  &:nth-of-type(9) {
    left: 20%;
    width: 30px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }
  &:nth-of-type(10) {
    left: 85%;
    width: 130px;
    height: 20px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;