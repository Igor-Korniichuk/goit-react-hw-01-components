import styled from '@emotion/styled';

export const StatisticsList = styled.section`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  border: 1px solid #e4e9ed;
  cursor: pointer;
  `;
export const Title = styled.h2`
  width: 100%;
  text-align: center;
  `;
export const StatItems = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px;
  list-style: none;
  padding: 0;
  margin: 0;
  `;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px 0; 
  background-color: ${p => p.backgroundColor}; 
  `;
export const Label = styled.span`
  margin-top: 10px;
  `;
export const Percentage = styled.span`
  margin-top: 10px;
  `;
