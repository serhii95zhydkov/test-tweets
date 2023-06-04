import { IoLogoTwitter } from 'react-icons/io5';

import bird from '../../images/bird.png';

import {
  ImgBackground,
  ContainerTitle,
  Title,
  StyledLink,
} from './Home.styled';

const Home = () => {
  return (
    <>
      <ImgBackground src={bird} alt="bird" />
      <ContainerTitle>
        <Title>
          Follow my
          <StyledLink to="/tweets">
            <IoLogoTwitter style={{ color: '#471ca9' }}  />
          </StyledLink>
        </Title>
      </ContainerTitle>
    </>
  );
};

export default Home;
