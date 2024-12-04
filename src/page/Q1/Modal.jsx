import styled from "styled-components";
import { CenterView, RowView2 } from "../../component/style_component";

const Background = styled(CenterView)`
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  background-color: #232323b8;
`;
const Modal = styled.div`
  color: #1d1d1d;
  background-color: #ffffff;
  width: 100%;
  max-width: 20rem;
  padding: 1.5rem;
  border-radius: 8px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Btn = styled.div`
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  color: gray;
  background-color: #eeeeee;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: gray;
    background-color: lightgray;
  }
`;

const LoginModal = ({ setOpenModal, id, pw, check }) => {
  const closeModal = () => setOpenModal(false);

  return (
    <Background>
      <Modal>
        <Title>로그인 정보</Title>

        <div>아이디: {id}</div>
        <div>비밀번호: {pw}</div>
        <div>자동로그인: {check ? "y" : "n"}</div>

        <RowView2 className="end">
          <Btn onClick={closeModal}>닫기</Btn>
        </RowView2>
      </Modal>
    </Background>
  );
};

export default LoginModal;
