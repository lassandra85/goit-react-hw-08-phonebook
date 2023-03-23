import styled from '@emotion/styled';

const size = {
  mobile: '320px',
  tablet: '768px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
};

export const Container = styled.div`
 margin: 0 auto;
  padding: 0 15px;
  max-width: 850px;
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: hsl(62, 95%, 75%);
`;

export const Title = styled.h1`
 margin-bottom: 25px;
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  @media ${device.tablet} {
    font-size: 44px;
  }
  /* border-radius: 10px;
  background-color: #ebf5fc; */
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 500;
  color: #fff;;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Paragraph = styled.p`
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 1.8;
  color: rgba(47, 47, 47, 0.6);
`;










