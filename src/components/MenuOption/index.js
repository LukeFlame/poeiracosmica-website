/* eslint-disable react/prop-types */
import styled from 'styled-components';

// Styles of the component
// Responsive desktop/mobile
// Style of each page menu option
const MenuOption = styled.a`
  position: relative;
  outline: 0;
  border: none;
  width: 271px;
  height: 60px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.whitesecundary};
  background-color: rgba(0,0,0,0);
  padding: 19px 14px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 0 3px 3px 0;
  transition: .2s;
  padding: 0 15px 0 20px;

  font-family: 'Solway', serif;
  font-size: 24px;
  font-weight: 400;
  text-align: left;

  display: flex;
  align-items: center;

  img {
    height: 32px;
    width: 32px;
    margin-right: 18px;
  }

  &:hover {
      opacity: .7;
  }

  &.selected {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.blacksecundary};
    border-left: 5px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 2px 2px 17px 1px rgba(0, 0, 0, 0.25);
    &:hover {
      opacity: 1;
    }
  }

  @media(max-width: 1160px) {
    width: 220px;
    font-size: 22px;
    img {
      height: 30px;
      width: 30px;
      margin-right: 12px;
    }
  }

  @media(max-width: 1080px) {
    justify-content: center;
    padding-left: 1%;

    :first-child {
      margin-left: 5px;
    } 

    :last-child {
      margin-right: 5px;
    }

    img {
      margin-right: 8px;
    }

    &.selected {
      border: 0;
      border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
    }
  }

  @media(max-width: 660px) {
    padding-left: 1%;
    padding-right: 2%;
    font-size: 20px;
    img {
      width: 20px;
      height: 20px;
    }
  }

  @media(max-width: 550px) {
    width: 100%;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export default MenuOption;
