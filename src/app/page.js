// import Image from "next/image";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  const { userId } = auth();
  // if (userId) {
  //   redirect("/dashboard");
  // }
  return (
    <main className="">
      <h1>Next.Js Auth</h1>
    </main>
  );
}
