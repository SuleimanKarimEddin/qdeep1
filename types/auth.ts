export interface User {
  id: number;
name: string;
email: string;
attemps: number;
}

export interface LoginData {
  token: string;
  user: User;
}

export interface AuthStore {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null;
  login: (data: LoginData) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  setGuest: (newGuest: any) => void;
  guest: any | null;
}

export interface RegisterData {
  token: string;
  user: User;
}
