import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'mtk',
      email: 'mtk@gmail.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'user2',
      email: 'user2@gmail.com',
      role: 'user',
    },
    {
      id: 3,
      name: 'user3',
      email: 'user3@gmail.com',
      role: 'user',
    },
    {
      id: 4,
      name: 'user4',
      email: 'user4@gmail.com',
      role: 'user',
    },
    {
      id: 5,
      name: 'user5',
      email: 'user5@gmail.com',
      role: 'user',
    },
  ];

  findAll(role?: 'admin' | 'user') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: { name: string; email: string; role: 'admin' | 'user' }) {
    const newUser = { id: Date.now(), ...user };
    return newUser;
  }

  update(
    id: number,
    updatedUser: { name?: string; email?: string; role?: 'admin' | 'user' },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
