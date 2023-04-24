import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;

   thead {
    background-color: lightcoral;
  }

  th,
  td {
    padding: 10px 80px;
    border: 1px solid #2a2a2a;
`;

export const TableBody = styled.tbody`
  tr:nth-of-type(2n) {
    background-color: rgb(240, 227, 227);
  }
`;
