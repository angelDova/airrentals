import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV != "production") globalThis.prisma = client;

//  NextJS 13 hot reloading can cause a bunch of hot reloading PrismaClient instances
//  giving us a warning in the terminal. So this way we assign the PrismaClient to
//  a globalThis variable which is not effected by hot reload
//  This is best practice for using prisma with Next13
//  We could technically import { PrismaClient } everywhere in the code but this
//  is a cleaner solution.

export default client;
