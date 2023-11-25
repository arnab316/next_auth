import { useUser } from "@clerk/nextjs";
import { getXataClient } from "../../../xata";
const Page = async () => {
  // const { user, isLoaded } = useUser();
  const xataClient = getXataClient();
  const folders = await xataClient.db.folders.getMany();
  return (
    <>
      {/* <h1 className="text-2xl text-rose-400">Welcome . {user?.fullName}</h1> */}
      {folders.map((fold) => (
        <p key={fold.id}>{fold.name}</p>
      ))}
    </>
  );
};

export default Page;
