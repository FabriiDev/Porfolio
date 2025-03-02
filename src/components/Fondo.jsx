import React from 'react';
import styled from 'styled-components';

const Fondo = ({ children }) => {
  return (
    <BackgroundWrapper>
      {children}
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #0f172a; /* bg-slate-950 */
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background: radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(255, 255, 255, 0));
  }
  
  &::before {
    left: -20%;
    top: -10%;
  }
  
  &::after {
    right: -20%;
    top: -10%;
  }
`;

export default Fondo;
