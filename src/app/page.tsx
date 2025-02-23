import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className='min-h-screen w-full flex items-center justify-center'>
<Link href="/admin">

<Button className="bg-black "> Click to visit Admin Pannel</Button>
</Link>

  </div>
  );
}
