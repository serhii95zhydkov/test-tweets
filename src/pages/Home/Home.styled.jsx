import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ImgBackground = styled.img`
  margin: 0 auto;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: inline-flex;
  align-items: center;
  color: #471ca9;
`;

export const StyledLink = styled(Link)`
  margin: 0;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  color: #471ca9;
  :active {
    color: #471ca9;
  }
`;
