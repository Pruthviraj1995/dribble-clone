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
  margin-bottom: 20px;

  .title {
    color: black;
    text-decoration: none;
  }

  .sub-container {
    width: 800px;
  }
`;

export const ImageWrapper = styled.img`
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  border-radius: 50%;
  border: 0.5px solid black;
`;

export const ContainerInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;

export const AvatarLine = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  text-align: center;
  border: 1px solid #e7e7e9;
  margin: 0;
  padding: 0;
  height: 1px;
`;
