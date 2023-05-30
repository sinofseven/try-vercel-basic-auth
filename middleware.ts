import {NextRequest, NextResponse} from "next/server";
import * as process from "process";
export default function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, passwd] = atob(authValue).split(':');

    if (user === process.env.BASIC_USER && passwd === process.env.BASIC_PASSWD) {
      // return NextResponse.next();
      return new NextResponse("unauthorized", {status: 401});
    }
  }
  return new NextResponse("unauthorized", {status: 401});
}