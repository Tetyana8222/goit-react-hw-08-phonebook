import styled from '@emotion/styled';
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarThumb = styled.div`
  height: 36px;
  width: 36px;
  margin-right: 10px;
  border-radius: 25px;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  object-fit: cover;
`;
export const Span = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 4px;
`;
export const Button = styled.button`
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  color: #000;
  background-color: #add2bb;
  border: solid 3px darkslategrey;
  border-radius: 8px;
  padding: 6px 10px;
  &:hover {
    transform: scale(1.2);
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
