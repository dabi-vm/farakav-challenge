// Note: All common types for api are defined here
type Pagination = {
  _page: number;
  _per_page: number;
};

export type RequestArgs<Body = undefined> = {
  body?: Body;
  params?: Partial<Pagination> & object;
};
