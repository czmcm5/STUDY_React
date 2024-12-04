import styled from "styled-components";

export const CenterView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &.col {
    flex-direction: column;
  }
`;
export const RowView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.top {
    align-items: flex-start;
  }
`;
export const RowView2 = styled.div`
  display: flex;
  align-items: center;
  &.none {
    display: none;
  }
  &.top {
    align-items: flex-start;
  }
  &.end {
    justify-content: flex-end;
  }
  &.center {
    justify-content: center;
  }
`;
export const Icon = styled.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;
