import {NextResponse} from "next/server";

export function GET() {
  return NextResponse.json({msg: 'test'}, {headers: {'Content-Type': 'application/json'}})
}
