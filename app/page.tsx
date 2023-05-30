import {Params, getData} from "@/app/get_data";
import Link from "next/link";

export default async function Home() {
  const data = await getData();
  const links = data.map((item) => <p key={item.id}><Link href={`/session/${item.id}`}>{item.name}</Link></p>);
  return (
    <main>
      <h2>Root Page!</h2>
      {links}
    </main>
  )
}
