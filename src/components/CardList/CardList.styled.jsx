import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 48px;

  margin-top: 48px;
  margin-bottom: 48px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 196px;

  margin: 0 auto;
  padding: 14px 39px;

  font-weight: 600;
  font-size: 18px;

  border-radius: 10px;
  border: none;

  background-color: #ebd8ff;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
  }
  color: #000000;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
`;

export const ContainerDrop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Select = styled.select`
  background-color: #ebd8ff;
  color: #000000;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`;
