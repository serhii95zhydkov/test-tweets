import { RotatingLines } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <RotatingLines
        strokeColor=" #471ca9"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </Container>
  );
};

export default Loader;
