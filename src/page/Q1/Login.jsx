import styled from "styled-components";
import { CenterView, Icon, RowView2 } from "../../component/style_component";
import { useState } from "react";
import LoginModal from "./Modal";

const Container = styled(CenterView)`
  width: 100%;
  height: 100dvh;
  background-color: #1e1e1e;
  color: white;
`;
const Title = styled.h2`
  margin-top: 0px;
`;
const InputBox = styled.input`
  width: 20rem;
  height: 3rem;
  padding: 0rem 1rem 0rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 16px;
  color: white;
  background-color: #1e1e1e;
  border: 1px solid #333333;
  border-radius: 5px;
  &::placeholder {
    color: #616161;
  }
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #646464;
  }
`;
const CheckBox = styled(RowView2)`
  width: 100%;
  font-size: 14px;
  color: #656565;
  cursor: pointer;
  &.check {
    color: white;
  }
`;
const CheckIcon = styled(Icon)`
  width: 1rem;
  margin-right: 0.3rem;
`;
const Btn = styled(CenterView)`
  width: 22rem;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #f15159;
  border: 2px solid #cd313e;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #db4064;
    border: 2px solid #cd3155;
  }
`;

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [check, setCheck] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const setting_id = (e) => setId(e.target.value);
  const setting_pw = (e) => setPw(e.target.value);
  const setting_check = () => setCheck(!check);
  const open_modal = () => setOpenModal(true);

  const login = () => {
    if (id === "" || pw === "") {
      return alert("아이디/비밀번호를 정확히 입력해주세요.");
    }
    open_modal();
  };
  const enterPress = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <Container>
      <CenterView className="col">
        <Title>로그인</Title>

        <InputBox placeholder="이메일" value={id} onChange={setting_id} />
        <InputBox
          placeholder="비밀번호"
          value={pw}
          onChange={setting_pw}
          onKeyPress={enterPress}
        />

        <CheckBox className={`${check && "check"} end`} onClick={setting_check}>
          <CheckIcon
            src={
              check
                ? require("../../img/icon_check.png")
                : require("../../img/icon_check_not.png")
            }
          />
          자동로그인
        </CheckBox>

        <Btn onClick={login}>로그인하기</Btn>
      </CenterView>

      {openModal && (
        <LoginModal setOpenModal={setOpenModal} id={id} pw={pw} check={check} />
      )}
    </Container>
  );
};

export default Login;
