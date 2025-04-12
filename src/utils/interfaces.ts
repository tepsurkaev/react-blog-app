export interface Blog {
  id: string;
  title: string;
  content: string;
}

export interface IState {
  loading: boolean;
  createLoading: boolean;
  blogs: Blog[];
  blog: Blog | null;
}
