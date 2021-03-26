import styled from 'styled-components';

// Styles of the component
// Responsive desktop/mobile
// Basically organizes the side components of the pages (with menus and tips)
const LateralComponentsPages = styled.div`
  display: flex;
  flex-direction: column;
  width: 271px;
  height: 100%;
  align-items: center;

  @media(max-width: 1160px) {
    width: 220px;
  }

  @media(max-width: 1080px) {
    width: 100%;
  }
`;

export default LateralComponentsPages;
