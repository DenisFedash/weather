import styled from '@emotion/styled';
import Card from '@mui/material/Card';
export const ContainerHourly = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: black;
  margin-top: 25px;
  padding: 15px 0;
  margin: 0 40px;
`;

export const Item = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-right: 1px;
  }

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(14px);
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 0 0;
`;

export const HourlyTemp = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(14px);
  border-radius: 5px;
  width: 100%;
  text-align: center;
  margin-top: 3px;
`;
