import { Client } from 'appwrite';

const client = new Client();

const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  key: import.meta.env.VITE_APPWRITE_KEY,
};

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.key);

export default client;
