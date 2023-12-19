import { NextRequest, NextResponse} from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.redirect("http://localhost:3000/dashboard")
} 