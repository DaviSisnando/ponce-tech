"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { createUser } from "../services/api";
import useClickOutside from "../hooks/useClickOutside";
import { StyledButton } from "@/styles/StyledButton.styled";
import LabelInput from "./LabelInput";
import Input from "./Input";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const StyledModal = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const StyledRadio = styled.div`
  display: flex;
  gap: 10px; 
  align-items: center;

  input {
    margin-right: 4px;
  }
`

interface UserFormProps {
  onClose: () => void;
  fetchUser: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onClose, fetchUser }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, onClose);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    status: "ativo",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(formData);
    fetchUser();
    onClose();
  };

  return (
    <StyledOverlay>
      <StyledModal ref={modalRef}>
        <StyledCloseButton onClick={onClose}>×</StyledCloseButton>
        <StyledFormContainer onSubmit={handleSubmit}>
          <LabelInput htmlFor="name" text="Nome">
            <Input
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              errorMessage="Campo Nome é obrigatório"
              required
            />
          </LabelInput>
          <LabelInput htmlFor="email" text="Email">
            <Input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              errorMessage="Campo Email é obrigatório"
              required
            />
          </LabelInput>
          <LabelInput htmlFor="date" text="Data">
            <Input
              name="birthdate"
              placeholder="Data de Nascimento"
              value={formData.birthdate}
              onChange={handleChange}
              type="date"
              errorMessage="Campo Data de nascimento é obrigatório"
              required
            />
          </LabelInput>
          <LabelInput htmlFor="password" text="Senha">
            <Input
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              errorMessage="Campo Senha é obrigatório"
              required
            />
          </LabelInput>
          <span>Status</span>
            <StyledRadio>
              <label>
                <input type="radio" name="status" value="ativo" defaultChecked />
                Ativo
              </label>
              <label>
                <input type="radio" name="status" value="inativo" />
                Inativo
              </label>
            </StyledRadio>
          <StyledButton type="submit">Criar Usuário</StyledButton>
        </StyledFormContainer>
      </StyledModal>
    </StyledOverlay>
  );
};

export default UserForm;
