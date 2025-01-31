import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import { IPortfolioSchema } from "../../../../database/portfolioSchema";

/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.
*/

type IParams = {
  params: {
    slug: string;
    portfolio_id: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  const request = await req.json(); //convert request to json

  //how to check request body??
  if (request == null) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  if (request !== null) {
    //extract comment params from request
    const comment = request.comment;
    const user = request.user;
    const time = request.time;

    try {
      await connectDB(); // connects to DB

      const result = await IPortfolioSchema.updateOne(
        {
          _id: process.env.PORTFOLIO_ID, //grabs the only portfolio entry
        },
        {
          $push: {
            comments: { user, comment, time }, //pushes the following object to 'comments' array
          },
        },
        { new: true } //returns the entry after it has been updated (as opposed to before the update)
      );

      return NextResponse.json(result);
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: "Portfolio not found." },
        { status: 404 }
      );
    }
  }
}
