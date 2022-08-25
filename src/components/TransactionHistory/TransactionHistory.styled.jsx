import styled from '@emotion/styled';

export const TableTransaction = styled.table`
    margin-top:50px;
    width: 1000px;
    border-collapse: collapse;
    `;

export const TableHead = styled.thead`    
    border: 1px solid rgb(100, 270, 255);
    th:not(:first-of-type) {
    border-left: 1px solid #fff;}`;

export const TableBody = styled.tbody`
    width: 100%;
    border-collapse: collapse;  

`
export const TableRow = styled.tr`
        color: gray;
        text-align: center;
        height: 50px;
        :nth-of-type(2n) {
            border: 1px solid #e7e7e7;
            border-top: none;
            background-color: rgb(219, 239, 240)};`;

export const TableHeader = styled.th`
    color: white;
    padding-block: 20px;
    text-align: center;
    font-size: 1.5rem;
    background-color: rgb(0, 200, 255);`;

export const TableData = styled.td``;
