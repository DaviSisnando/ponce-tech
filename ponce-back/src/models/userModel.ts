import prisma from '../database';

interface User {
  name: string;
  email: string;
  birthdate: string;
  status: 'ativo' | 'inativo';
  password: string;
}

const createUser = async (user: User) => {
  const { name, email, birthdate, status, password } = user;
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      birthdate: new Date(birthdate),
      status,
      password
    },
  });
  return newUser;
};

const getUsers = async () => {
  const users = await prisma.user.findMany();
  console.log(users)
  return users;
};

const findUser = async (email: string) => {
  const userFound = await prisma.user.findFirst({where: {email}});
  console.log(userFound)
  return userFound;
};

export { createUser, getUsers, findUser };
