import styled from "styled-components";
import Button from "../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
  border-radius: 8px;
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-top: 3rem;
  }
  margin-top: 2rem;
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
