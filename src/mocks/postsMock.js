export const posts = [
  {
    id: 1,
    title: 'test1',
    userName: 'oridev',
    dateSubmitted: 1540000198000,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/330px-Cat03.jpg',
    score: 5,
    parentId: null,
  },
  {
    id: 10,
    text: 'cool cat',
    userName: 'noa2',
    dateSubmitted: 1540102198000,
    score: 3,
    parentId: 1,
  },
  {
    id: 100,
    text: 'yes it is',
    userName: 'reuty',
    dateSubmitted: 1550105198000,
    score: 1,
    parentId: 10
  },
  {
    id: 11,
    text: 'i hate this cat',
    userName: 'JackPeralta',
    dateSubmitted: 1550172198000,
    score: -5,
    parentId: 1
  },
  {
    id: 2,
    title: 'im on a boat',
    userName: 'justin',
    dateSubmitted: 1550100198000,
    imageUrl: 'https://xclusiveyachts.com/images/yachts/x13-36ft/gallery/preview/03.jpg',
    score: 15,
  },
  {
    id: 22,
    text: 'posidon look at me!',
    userName: 'lidor',
    dateSubmitted: 1550152198000,
    score: 25,
    comments: [],
    parentId: 2,
  },
  {
    id: 23,
    text: 'dont you ever forget',
    userName: 'moshe',
    dateSubmitted: 1550472198000,
    score: 0,
    parentId: 2
  },


]
// export const posts = [
//   {
//     id:1,
//     title: 'test1',
//     userName: 'oridev',
//     dateSubmitted: 1540000198000,
//     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/330px-Cat03.jpg',
//     score: 5,
//     comments: [
//       {
//         text: 'cool cat',
//         userName: 'noa2',
//         dateSubmitted: 1540102198000,
//         score: 3,
//         comments: [
//           {
//             id:2,
//             text: 'yes it is',
//             userName: 'reuty',
//             dateSubmitted: 1550105198000,
//             score: 1,
//             comments: []
//           }
//         ]
//       },
//       {
//         id:3,
//         text: 'i hate this cat',
//         userName: 'inbar',
//         dateSubmitted: 1550172198000,
//         score: -5,
//         comments: []
//       },
//     ]
//   },
//   {
//     id:4,
//     title: 'im on a boat',
//     userName: 'justin',
//     dateSubmitted: 1550100198000,
//     imageUrl: 'https://xclusiveyachts.com/images/yachts/x13-36ft/gallery/preview/03.jpg',
//     score: 15,
//     comments: [
//       {
//         id:5,
//         text: 'posidon look at me!',
//         userName: 'lidor',
//         dateSubmitted: 1550152198000,
//         score: 25,
//         comments: []
//       },
//       {
//         id:6,
//         text: 'dont you ever forget',
//         userName: 'moshe',
//         dateSubmitted: 1550472198000,
//         score: 0,
//         comments: []
//       },
//     ]
//   },

// ]