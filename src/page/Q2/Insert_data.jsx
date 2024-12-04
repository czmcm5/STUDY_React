import styled from "styled-components";
import { RowView2 } from "../../component/style_component";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
`;
const InputArea = styled(RowView2)`
  width: 100%;
  max-width: 30rem;
  padding-bottom: 2rem;
  margin: 1rem;
  margin-bottom: 0;
  border-bottom: 1px solid #969696;
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 0.6rem 1rem;
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: 0px;
    &:hover,
    &:focus {
      border: 1px solid #1d1d1d;
    }
  }
  div {
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    text-align: center;
    white-space: nowrap;
    color: white;
    background-color: tomato;
    border-radius: 4px;
    cursor: pointer;
  }
`;
const Content = styled.div`
  flex: 1;
  padding: 1rem 0;
  width: 100%;
  max-width: 30rem;
  overflow: auto;
  div.noneData {
    text-align: center;
    margin-top: 2rem;
    color: gray;
  }
`;
const Row = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f5f5f7;
  border-radius: 8px;
`;

const Insert_data = () => {
  const [content, setContent] = useState("");
  const [list, setList] = useState([]);

  const setting_content = (e) => setContent(e.target.value);

  const insert = () => {
    if (!content) {
      return alert("데이터를 입력해주세요.");
    }
    setList([...list, content]);
    setContent("");
  };
  const enterPress = (e) => {
    if (e.key === "Enter") {
      insert();
    }
  };

  return (
    <Container>
      <h2>데이터 입력</h2>

      <InputArea>
        <input
          value={content}
          onChange={setting_content}
          placeholder="데이터를 입력해주세요."
          onKeyPress={enterPress}
        />
        <div onClick={insert}>등록</div>
      </InputArea>

      <Content>
        {list.length === 0 ? (
          <div className="noneData">데이터가 없습니다.</div>
        ) : (
          list.map((data, idx) => {
            return <Row key={idx}>• {data}</Row>;
          })
        )}
      </Content>
    </Container>
  );
};

export default Insert_data;
