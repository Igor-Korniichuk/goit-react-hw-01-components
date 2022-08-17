import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
display: flex;
align-items: center;
margin-left: auto;
margin-right: auto;
flex-direction: column;
padding: 70px 0;
width: 500px;
background-color: #e1eceb;
  `;

export const Description = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 450px;
  padding: 20px 15px;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  `;
export const Avatar = styled.img`
display: block;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 20px;`;

export const Name = styled.p`
margin-top: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 0.05em;
  margin-bottom: 10px;`;
export const Tag = styled.p``;
export const Location = styled.p``;
export const Stats = styled.ul``;
export const Label = styled.span``;
export const Quantity = styled.span``;