import styled from 'styled-components';

export const DribbleHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px -1px 0px #f3f3f4;
  padding: 0 24px;

  .sub-wrapper {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-with-navbar {
    display: flex;
  }

  .title {
    font-size: 18px;
    padding-right: 14px;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  //   flex-direction: column;
  align-items: center;

  .option {
    padding: 0 12px;
    font-weight: 600;
    color: #6e6d7a;
    font-size: 14px;

    :hover {
      color: #00000;
    }
  }
`;

export const ImageWrapper = styled.img`
  height: 18px;
  width: 18px;
  color: #6e6d7a;
  margin-right: 12px;
`;
