import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  display: block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 10px;

  background-color: ${props => {
    if (props.isonline) {
      return 'green';
    }
    return 'red';
  }};
`;

export const FriendsImg = styled.img`
  margin-right: 15px;
`;

export const FriendsName = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
