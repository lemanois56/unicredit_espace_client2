import { defineStore } from 'pinia';
import users from '@/utils/users.json';

interface UserPayloadInterface {
  id: number;
  username: string;
  password: string;
  token: string;
}
// Ajout d'une interface pour l'utilisateur complet (optionnel, pour typage)
interface UserFull {
  id: number;
  username: string;
  password: string;
  token: string;
  fullname: string;
  accountblocked: boolean;
  theme: string;
  dominantColor: string;
  currency: string;
  currencyPosition: string;
  accounts: any[];
  stats: any;
  transactions: any[];
}
const secretKey = 'base64:l4SGoC4xh1FsNCzSxKaFkQlajOdzBdWTNM9BxizQ5hY=';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    currentUser: null as UserFull | null,
  }),
  getters: {
    getUser: (state) => state.currentUser,
    isAuthenticated: (state) => state.authenticated,
    isAccountBlocked: (state) => state.currentUser?.accountblocked ?? false,
  },
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const data = users.find(u => u.username === username && u.password === password);
      this.loading = true;
      if (data) {
        const generateToken = this.generateToken(data);
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value = generateToken; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
        this.currentUser = data; // stocke l'utilisateur complet
        this.loading = false;
        return { authenticated: true }
      } else {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        this.authenticated = false; // set authenticated  state value to false
        this.currentUser = null;
        token.value = null; // clear the token cookie
        this.loading = false;
        return { authenticated: false }
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      this.currentUser = null;
      token.value = null; // clear the token cookie
    },
    generateToken(user: UserPayloadInterface) {
      // In a real-world scenario, you would use a library like jsonwebtoken to generate a secure JWT.
      // For simplicity, we'll just use a basic token here.
      return `Bearer ${user.id}:${user.username}`;
    },
    // Ajout de la méthode d'initialisation depuis le cookie
    initUserFromCookie() {
      const token = useCookie('token');
      if (token.value) {
        // Token format: Bearer id:username
        const parts = token.value.replace('Bearer ', '').split(':');
        if (parts.length === 2) {
          const id = Number(parts[0]);
          const username = parts[1];
          const user = users.find(u => u.id === id && u.username === username);
          if (user) {
            this.currentUser = user;
            this.authenticated = true;
            return;
          }
        }
      }
      this.currentUser = null;
      this.authenticated = false;
    },
  },
});