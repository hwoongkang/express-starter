interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[] = [
  {
    id: 0,
    name: "강현웅",
    age: 28,
  },
];

const coinFlip = () => Math.random() > 0.5;

export const loadUsers: () => Promise<IUser[]> = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (coinFlip()) {
        resolve(users);
      } else {
        reject(new Error("coin flip failed"));
      }
    }, 50);
  });

const appendUser = (name: string, age: number): Promise<IUser> =>
  new Promise((resolve, reject) => {
    const newUser = {
      id: users.length,
      name,
      age,
    };
    setTimeout(() => {
      users = [...users, newUser];
      resolve(newUser);
    }, 50);
  });

export const registerUser: (name: string, age: number) => Promise<IUser> =
  async (name, age) => {
    const appendedUser = appendUser(name, age);
    return appendedUser;
  };
