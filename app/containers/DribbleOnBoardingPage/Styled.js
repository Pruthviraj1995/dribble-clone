import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 64px 120px;

  .title {
    color: black;
    text-decoration: none;
  }

  .sub-container {
    width: 800px;
  }
`;

export const ImageWrapper = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  //   background-color: red;
  border: 0.5px solid black;
  max-height: 200px;
  max-width: 200px;
  margin-right: 16px;
`;

export const ContainerInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;
