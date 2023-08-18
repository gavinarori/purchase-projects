import { NextResponse } from "next/server";
import { main } from "../route";
import { prisma } from '@/utils/prismadb';

//this function component is to explictly retrieve post from the db
export const GET = async (req: Request, res: NextResponse) => {
  try {
    //Split a string into substrings using the specified separator and return them as an array.
    const id = req.url.split("/blog/")[1];
    //connect to the db
    await main();
    //find the post where the id from const id is the same as the post
    const post = await prisma.post.findFirst({ where: { id } });
    //if the ids are not the same 
    if (!post)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    // if the id are the same return the next response success and status
      return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } 
  //disconnect from the db
  finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    const { title, description } = await req.json();
    await main();
    const post = await prisma.post.update({
      data: { title, description },
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    await main();
    const post = await prisma.post.delete({ where: { id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
