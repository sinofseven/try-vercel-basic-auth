export type Params = {
  id: string;
  name: string;
};

export async function getData(): Promise<Params[]> {
  return fetch("https://cf02.luciferous.link/post-sample.json").then((res) => res.json());
}

