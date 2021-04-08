import expressLoader from './express';
import typeormLoader from './typeorm';

export default async ({ expressApp }) => {
  await typeormLoader();
  console.log('---------- db Connection');

  await expressLoader({ app: expressApp });
  console.log('---------- Express Intialized');

  // ... Initialize agenda
  // ... or Redis, or whatever you want
};
