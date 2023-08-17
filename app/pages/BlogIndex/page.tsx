import SingleBlog from "@/app/components/blogHolder/SingleBlog";
import getBlogs,{IBlogParams} from "@/app/actions/getBlogs"
import getCurrentUser from "@/app/actions/getCurrentUser"
import Link from "next/link";

interface HomeProps {
  searchParams: IBlogParams
};



export default async function BlogIndex({searchParams}:HomeProps) {

  const currentUser = await getCurrentUser();

  const blogs = await getBlogs(searchParams)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
        {blogs.map((item:any) => (
          <SingleBlog
          key={item.id}
          data={item}
          currentUser={currentUser}
          />
        ))}
    </main>
  )
  }