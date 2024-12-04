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
  line-height: 24px;
  white-space: pre-wrap;
  border-radius: 8px;
  background-color: #efefe9;
  div.title {
    font-size: 18px;
    font-weight: bold;
    color: #29aca6;
    margin-bottom: 0.5rem;
  }
  div.red {
    color: tomato;
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
  const go_insert_data = () => Navigation("/insert_data");

  return (
    <Container>
      <Box>
        <div className="title">시작 전 셋팅하기</div>

        <div>• 프로젝트 설치</div>
        <div>• CSS :: styled-components 설치</div>
        <div>• 페이지 라우팅 :: react route dom 설치</div>
      </Box>

      <Box>
        <div className="title red">주의사항</div>

        <div>• .css 파일 금지. (styled-components로만 구현)</div>
        <div>• 페이지 라우팅 설정 똑같이 하기</div>
        <div>• 디자인/기능 똑같게 작동되도록</div>
        <div>• 페이징 네비게이션 변수명 Navigation으로 통일</div>
        <div>• 알아보기 힘든 변수명 및 클래스명 금지</div>
        <div>• 페이징 구현 완료 후 어떻게 작동하는지 설명해주기!</div>
      </Box>
      <Box>
        <div>{`💡css 작성 시,
최대한 해당 순서를 지켜주세요.
position -> display -> width/height -> padding/margin -> font/text -> background/border -> cursor/transition -> hover,foucs 이벤트`}</div>
      </Box>

      <Title>목차</Title>

      <ListItem onClick={go_login}>▶︎ Q1. 로그인 만들기</ListItem>
      <ListItem onClick={go_insert_data}>▶︎ Q2. 데이터 입력 예제</ListItem>
    </Container>
  );
};

export default Home;
