export type Url = {
  original: string;
  shortened: string;
  totalClicks: number;
};

export type Click = {
  date: Date;
  headers: object;
};

export type NewUrlInput = {
  original: string;
  count: number;
};
