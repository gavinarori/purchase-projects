

import bcrypt from 'bcrypt'
import { prisma } from '@/utils/prismadb'
import { NextResponse } from 'next/server'

export async function Post(request:any) {
    const {name, email,password} = request.json()

    if (!name || !email || !password){
        return new NextResponse('missing fields',{status:400})
    }
    
    //checks if the email already exists
    const exist = await prisma.user.findUnique({
        where:{
            email
        }
    })

    //if the email already exists it throws an error
    if(exist){
        throw new Error('Email already exists')
    }

    // if all the fields are ok we need to hash our passwords using bcrypt
    const hashedPasswords = await bcrypt.hash(password,10)

    //now we need to create the user in the db
    const user = await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    })
    
    //return the user
    return NextResponse.json(user)
}