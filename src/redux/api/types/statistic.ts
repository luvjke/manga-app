export interface StatisticObject {
  result: string;
  statistics: {
    [key: string]: {
      comments: {
        threadId: number;
        repliesCount: number;
      };
      rating: {
        average: number;
        bayesian: number;
      };
      follows: number;
    };
  };
}
