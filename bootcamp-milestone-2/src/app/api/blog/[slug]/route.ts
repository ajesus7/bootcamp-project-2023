import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema from "../../../../database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.
*/

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = params; // another destructure
  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }
}
