import { Paragraph, FooterLink } from './Footer.styled';

const Footer = () => {
  return (
    <>
      <Paragraph>
        Created by{' '}
        <FooterLink
          href="https://www.linkedin.com/in/serhii-zhydkov/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <b>Serhii Zhydkov</b>
        </FooterLink>{' '}
        for{' '}
        <FooterLink
          href="https://m.goit.global/ua/new/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <b>GoIT</b>
        </FooterLink>
      </Paragraph>
    </>
  );
};

export default Footer;
