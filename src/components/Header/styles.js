import styled from 'styled-components';

import { theme } from 'styles';

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.primaryBlack}
`;

const LinkWrapper = styled.div`
  & a {
    margin: 0 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

export { LinkWrapper, HeaderWrapper };
