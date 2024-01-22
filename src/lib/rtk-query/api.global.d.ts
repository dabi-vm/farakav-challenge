type Pagination = {
  page: number;
  per_page: number;
};

declare type RequestArgs<Body = undefined> = {
  body?: Body;
  params?: Partial<Pagination> & object;
};
