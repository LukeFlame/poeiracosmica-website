import React from 'react';
import styled from 'styled-components';
import ScrollUpButton from 'react-scroll-up-button';

// Styles of the component
const Wrapper = styled.div`
  .scroll-button {
    border-radius: 50% !important;
    opacity: 0.86 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding-bottom: 5px !important;
    background-color: ${({ theme }) => theme.colors.primary} !important;
    outline: none !important;

    svg {
      height: 50% !important;
      width: 50% !important;
      opacity: 0.6 !important;
    }
  }
`;

// Button that scroll up, very useful
export default function ScrollToTheTopButton() {
  return (
    <Wrapper>
      <div>
        <ScrollUpButton
          ContainerClassName="scroll-button"
          EasingType="easeInSine"
        />
      </div>
    </Wrapper>
  );
}
