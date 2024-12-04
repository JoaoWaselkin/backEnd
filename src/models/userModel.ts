export interface User {
    id: number;
    name: string;
    email: string;
    passwordHash: string; 
  }
  
  export const users: User[] = [];