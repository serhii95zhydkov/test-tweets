import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px 0 36px;

  border-radius: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const ImgLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ImgBackground = styled.img`
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 18px 0 62px 0;

  background-color: #ebd8ff;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const ContainerAvatar = styled.div`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  border-radius: 50%;
`;

export const ImgAvatar = styled.img`
  border-radius: 50%;
  overflow: hidden;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;

export const Button = styled.button`
  min-width: 196px;
  height: 50px;
  padding: 14px 39px;

  font-weight: 600;
  font-size: 18px;

  border-radius: 10px;
  border: none;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  background-color: ${function (props) {
    return props.value ? '#5cd3a8' : '#ebd8ff';
  }};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
  }
`;
