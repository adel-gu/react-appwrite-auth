import { Account, Client, ID } from 'appwrite';

const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  key: import.meta.env.VITE_APPWRITE_KEY,
};

const client = new Client();
export const account = new Account(client);
export const uniqueId = ID.unique();

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.key);

export default client;
