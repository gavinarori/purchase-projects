
import { prisma } from '@/utils/prismadb';
import { NextResponse } from "next/server"
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return console.log('Hi');
    
  }

  const body = await request.json();
  const { 
    name,
    description,
    imageSrc
   } = body;

//   Object.keys(body).forEach((value: any) => {
//     if (!body[value]) {
//       NextResponse.error();
//     }
//   });

  const listing = await prisma.listing.create({
    data: {
      name,
      imageSrc,
      description,
      userId:currentUser.id
    //   userId: currentUser.id
    }
  });

  return NextResponse.json(listing);
}