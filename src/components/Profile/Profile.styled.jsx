import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: max-content;
  height: max-content;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  cursor: pointer;
  
  img {margin-bottom: 20px;
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50%;}
  `;

export const Description = styled.div`
  display: grid;
  place-items: center;
  padding-block: 40px;
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
  margin-bottom: 10px;
  `;

export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.15;
  letter-spacing: 0.05em;
  color: gray;`;

export const Location = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.15;
  letter-spacing: 0.05em;
  color: gray;`;

export const Stats = styled.ul`
  margin-block: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  place-items: center;
  background-color: lightgrey;
  
  li {
  display: grid;
  place-items: center;
  width: 90px;
  padding-top:10px;
  padding-bottom:10px;
  grid-gap: 5px;
  min-width: 100%;
  border-top: 0.5px solid #c2c2c2;
  border-left: 0.5px solid #c2c2c2;
}`;

export const Label = styled.span`
  margin-bottom: 10px;  
  color: gray;
  font-size: 18px;
  line-height: 1.17;
  letter-spacing: 0.05em;
  text-transform: capitalize;`;

export const Quantity = styled.span`
  display: block;
  font-weight: bold;`;