import {NextApiRequest, NextApiResponse} from "next";


export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.end('{"msg": "test api"}')
}
