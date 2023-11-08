import { Account, Client } from 'appwrite';

const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  key: import.meta.env.VITE_APPWRITE_KEY,
};

const client = new Client();
export const account = new Account(client);

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.key);

export default client;
