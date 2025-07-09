import dbConnect from "@/lib/mongodb";
import linktreeUrls from "@/models/linktreeUrls";
import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
  try {
    await dbConnect();
    const { handle, LinkTree, picture,name } = await request.json();
    // console.log(handle,LinkTree);
    const tree = await linktreeUrls.findOne({ handle });
    if (tree) {
      return Response.json(
        { message: "LinkTree already exits" },
        { status: 409 }
      );
    }

 let ProfilePicture = "";
    if (picture) {
      const uploadRes = await cloudinary.uploader.upload(picture);
      ProfilePicture = uploadRes.secure_url;
    }

    // console.log(name,handle,LinkTree,ProfilePicture);
    const newTree = await linktreeUrls.create({
      name,
      handle,
      LinkTree,
      ProfilePicture,
    });
    // console.log(newTree);
    return Response.json(
      { message: "Add LinkTree successfully" },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
export async function GET(request) {
  try {
    await dbConnect();

    const handles = await linktreeUrls.find({}).select("handle -_id");
    // console.log(handles);
    return Response.json({ message: "successful", handles }, { status: 200 });
  } catch (e) {
    console.error("GET handles error:", e);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
