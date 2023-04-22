import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  max-width: 240px;
  padding: 20px;
  background-color: lightcoral;
  margin: 0 auto;
  border-radius: 5px;
`;

export const UserInfo = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 5px;
`;

export const UserImg = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  padding: 15px;
  background-color: lightblue;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const UserTag = styled.p`
  margin-bottom: 6px;
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const UserStatsItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const UserStatsLabel = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
