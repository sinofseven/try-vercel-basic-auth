import {Params, getData} from "@/app/get_data";
import Link from "next/link";

type Props = {
  params: Params
}

export async function generateStaticParams() {
  return getData();
}

export default async function Session(props: Props) {
  const data = await getData();
  const current: Params = {
    id: "dummy",
    name: "dummy"
  };
  for (const item of data) {
    if (item.id == props.params.id) {
      current.id = item.id;
      current.name = item.name;
    }
  }
  return (
    <main>
      <h2>Session Data</h2>
      <p>
        <Link href="/">Root</Link>
      </p>
      <table border={1}>
        <tbody>
          <tr>
            <th>id</th>
            <td>{current.id}</td>
          </tr>
          <tr>
            <th>name</th>
            <td>{current.name}</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
