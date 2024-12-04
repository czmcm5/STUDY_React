import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
const Box = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 30rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: #efefe9;
  div.title {
    font-size: 18px;
    font-weight: bold;
    color: #29aca6;
    margin-bottom: 0.5rem;
  }
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 1rem 0;
`;
const ListItem = styled.div`
  text-decoration: underline;
  color: gray;
  cursor: pointer;
  &:hover {
    color: #1d1d1d;
  }
`;

const Home = () => {
  const Navigation = useNavigate();

  const go_login = () => Navigation("/login");

  return (
    <Container>
      <Box>
        <div className="title">시작 전 셋팅하기</div>

        <div>• 프로젝트 설치</div>
        <div>• CSS :: styled-components 설치</div>
        <div>• 페이지 라우팅 :: react route dom 설치</div>
      </Box>

      <Title>목차</Title>

      <ListItem onClick={go_login}>▶︎ 로그인 만들기</ListItem>
    </Container>
  );
};

export default Home;
