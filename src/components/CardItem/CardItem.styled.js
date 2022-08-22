import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
// import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const CardWeather = styled(Card)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(14px);
`;

export const Img = styled(CardMedia)`
  padding: 10px;
`;

export const City = styled.h1`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const TempContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

export const Temp = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-right: 10px;
`;

export const Clouds = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  position: relative;
  text-transform: uppercase;
`;

export const MiniContainer = styled(Typography)`
  margin-right: 5px;
  align-items: center;
  text-transform: uppercase;
  padding-bottom: 15px;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Info = styled.p`
  :last-child {
    margin: auto 0;
  }
`;

export const BtnContainer = styled(CardActions)`
  justify-content: space-between;
  padding: 20px;
`;
//________
export const BtnDetails = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  :hover {
    color: green;
  }
`;

export const BtnDel = styled(DeleteForeverIcon)`
  cursor: pointer;
  :hover {
    color: green;
  }
`;
