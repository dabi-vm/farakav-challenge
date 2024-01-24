type Pagination = {
  _page: number;
  _per_page: number;
};

export type RequestArgs<Body = undefined> = {
  body?: Body;
  params?: Partial<Pagination> & object;
};
