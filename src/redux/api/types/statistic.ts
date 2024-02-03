export interface StatisticObject {
  result: string;
  statistics: id;
}
export interface id {
  id: StatisticData;
}
export interface StatisticData {
  comments: {
    threadId: number;
    repliesCount: number;
  };
  rating: {
    average: number;
    bayesian: BigInt;
  };
  follows: number;
}
// {
//     "result": "ok",
//     "statistics": {
//       "f9c33607-9180-4ba6-b85c-e4b5faee7192": {
//         "comments": {
//           "threadId": 4756728,
//           "repliesCount": 12
//         },
//         "rating": {
//           "average": 7.5,
//           "bayesian": 6.47
//         },
//         "follows": 3
//       }
//     }
//   }
