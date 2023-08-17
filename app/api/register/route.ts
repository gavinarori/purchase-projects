import bcrypt from 'bcrypt';
import { prisma } from '@/utils/prismadb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return new NextResponse('missing fields', { status: 400 });
  }

  // Check if the email already exists
  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  // If the email already exists, throw an error
  if (exist) {
    throw new Error('Email already exists');
  }

  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user in the database
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  // Return the user
  return new NextResponse(JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
}
