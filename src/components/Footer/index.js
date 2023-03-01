import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
        <p>Footer</p>
        </Wrapper>

  );
}

const Wrapper = styled.footer`
heigth: 80px;
    display: flex;
    justify-content: center;
    align-items : center;
    border-top: solid 1px;
`;

