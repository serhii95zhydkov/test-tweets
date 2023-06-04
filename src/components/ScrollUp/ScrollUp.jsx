import ScrollToTop from 'react-scroll-up';
import { IoArrowUp } from 'react-icons/io5';

const ScrollUp = () => {
  return (
    <ScrollToTop
      showUnder={150}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        bottom: 32,
        borderRadius: '50%',
        background:
          'linear-gradient(114.99deg,#471ca9 -0.99%,#5736a3 54.28%,#4b2a99 78.99%)',
        boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
      }}
    >
      <IoArrowUp size="32" />
    </ScrollToTop>
  );
};

export default ScrollUp;
