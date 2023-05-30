import {NextResponse} from "next/server";

export async function GET() {
  return NextResponse.json({msg: 'test'}, {headers: {'content-type': 'application/json'}})
}
