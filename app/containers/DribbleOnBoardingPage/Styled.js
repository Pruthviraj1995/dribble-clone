import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  max-width: 1200px;

  .title {
    color: black;
    text-decoration: none;
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
  padding: 64px 120px;
  align-items: center;
`;
