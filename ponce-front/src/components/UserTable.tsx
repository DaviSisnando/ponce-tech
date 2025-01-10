"use client"
import React from 'react';
import styled from 'styled-components';
import { User } from '../types/User';

interface TableProps {
  users: User[];
}

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: #515151;

  th, td {
    padding: 8px;
  }

  td:last-child {
    text-transform: capitalize;
  }

  tr {
    border: 1px solid #ddd;
  }

  th {
    text-align: left;
  }

  tr:nth-child(2n) {
    background-color: #fafafa;
  }

  tbody {
    color: black;
  }
`;

const UserTable: React.FC<TableProps> = ({ users }) => (
  <TableContainer>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Data de Nascimento</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {users?.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{new Date(user.birthdate).toLocaleDateString('pt-BR')}</td>
          <td>{user.status}</td>
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

export default UserTable;
