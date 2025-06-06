// src/lib/appwrite.js
import { Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Or your self-hosted URL
  .setProject('66833556002472fbd6d9'); // Your actual Project ID

export const databases = new Databases(client);
