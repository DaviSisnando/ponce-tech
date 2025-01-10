"use client"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchUsers } from '../services/api';
import Table from '@/components/UserTable';
import Form from '@/components/UserForm';
import { User } from '@/types/User';
import { StyledUserTitle } from '@/styles/StyledUserTitle.styled';
import { StyledButton } from '@/styles/StyledButton.styled';

const Container = styled.div`
  padding: 20px;
  margin: 0 8rem;
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
`;

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
    setFilteredUsers(data);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(value.toLowerCase()) ||
      user.email.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <StyledUserTitle>
        <h1>Usuários</h1>
        <StyledButton onClick={() => setOpenForm(true)}>
          Criar Usuário
        </StyledButton>
      </StyledUserTitle>

      <SearchInput
        type="text"
        placeholder="Pesquisar por nome ou email"
        value={searchTerm}
        onChange={handleSearch}
      />

      {openForm && <Form onClose={() => setOpenForm(false)} fetchUser={getUsers} />}
      <Table users={filteredUsers} />
    </Container>
  );
};

export default Home;
