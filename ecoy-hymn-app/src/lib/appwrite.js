import { Client, Databases, Query } from 'appwrite';

export const client = new Client();
client
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('66833556002472fbd6d9');

export const databases = new Databases(client);

// Add this:
export { Query };
