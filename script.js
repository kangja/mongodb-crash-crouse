// db.posts.insert({
//   title: "Post One",
//   body: "Body of post one",
//   category: "News",
//   likes: 4,
//   tags: ["news", "events"],
//   user: {
//     name: "John Doe",
//     status: "author",
//   },
//   date: Date(),
// });

// db.posts.insertMany([
//   {
//     title: "Post Two",
//     body: "Body of post two",
//     category: "Technology",
//     date: Date(),
//   },
//   {
//     title: "Post Three",
//     body: "Body of post three",
//     cateogry: "News",
//     date: Date(),
//   },
//   {
//     title: "Post Four",
//     body: "Body of post four",
//     cateogry: "Entertainment",
//     date: Date(),
//   },
// ]);

// db.posts.findOne({ category: "News" });

// db.posts.update(
//   { title: "Post Two" },
//   {
//     title: "Post Two",
//     body: "New post 2 body",
//     date: Date(),
//   },
//   {
//     upsert: true,
//   }
// );

// db.posts.update(
//   { title: "Post Two" },
//   {
//     $set: {
//       body: "Body of post 2",
//       category: "Technology",
//     },
//   }
// );

// db.posts.find({ title: "Post Two" }).pretty();

// db.posts.update({ title: "Postg One" }, { $inc: { likes: 2 } });

// db.posts.update({ title: "Post One" }, { $rename: { likes: "views" } });

// db.posts.find().pretty();
// db.posts.remove({ title: "Post Four" });

// db.posts.update(
//   { title: "Post One" },
//   {
//     $set: {
//       comments: [
//         {
//           user: "Mary Williams",
//           body: "Comment One",
//           date: Date(),
//         },
//         {
//           user: "Harry Potter",
//           body: "Comment Two",
//           date: Date(),
//         },
//       ],
//     },
//   }
// );

// db.posts.find({ title: "Post One" }).pretty();

// db.posts.find({
//   comments: {
//     $elemMatch: {
//       user: "Mary Williams",
//     },
//   },
// });

// db.posts.createIndex({ title: "text" });

// db.posts.find({
//   $text: {
//     $search: '"Post T"',
//   },
// });

// db.posts.update({ title: "Post Two" }, { $set: { views: 10 } });

db.posts.find({ views: { $gt: 3 } });
