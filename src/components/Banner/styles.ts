import styled, { css } from "styled-components";

import bannerBackground from "../../assets/images/banner/banner-background.svg";

export const Container = styled.section`
  ${({ theme }) => css`
    background-image: url(${bannerBackground});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    > div {
      width: 100%;
      max-width: 112rem;
      padding: 9.4rem 2.4rem 10.8rem;
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2.4rem;
    }

    h1 {
      font-family: ${theme.fonts.header};
      font-size: ${theme.fontSize[48]};
      line-height: ${theme.lineHeight["1.3"]};
      color: ${theme.colors["gray-900"]};
    }

    h2 {
      margin-top: 1.6rem;
      font-size: ${theme.fontSize[20]};
      font-weight: 400;
      line-height: ${theme.lineHeight["1.3"]};
      color: ${theme.colors["gray-800"]};
    }
  `}
`;
