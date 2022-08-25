import styled from '@emotion/styled';

export const FriendSection = styled.ul`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 0px;
    margin-top: 50px;`;

export const FriendListItem = styled.li`
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 18px;
    border: 1px solid #557b83;
    border-radius: 10px;
    cursor: pointer;`;
export const Status = styled.span`
    width: 30px;
    height: 30px;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
    border-radius: 50%;`;
export const Avatar = styled.img`
    object-fit: cover;
    width: 30px;
    border-radius: 50%;
    margin-left: 30px;`;
export const Name = styled.p`
    margin-left: 10px;`;