import dbConnect from "@/lib/mongodb";
import linktreeUrls from "@/models/linktreeUrls";
export async function GET(request, { params }) {
  try {
    await dbConnect();
    // console.log(params);
    const { handle } = await params;
    // console.log(handle);
    const tree = await linktreeUrls.findOne({ handle }).select("-_id");
    if (!tree) {
      return Response.json({ message: "BitTree Not found" }, { status: 404 });
    }
    // console.log(tree);
    return Response.json({ tree: tree }, { status: 200 });
  } catch (e) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
