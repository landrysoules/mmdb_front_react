import { schema } from 'normalizr';

// Define a movie schema
export const movie = new schema.Entity('movies');

export const cast = new schema.Entity('cast');

// // Define your cast schema
// const cast = new schema.Entity('casts', {
//   commenter: user
// });

// // Define your article
// const article = new schema.Entity('articles', {
//   author: user,
//   comments: [comment]
// });
