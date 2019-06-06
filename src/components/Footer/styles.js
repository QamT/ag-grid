import styled from 'styled-components';

import { theme } from '../../styles';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primaryBlack}
`;

export default FooterWrapper;
