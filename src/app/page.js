import Try from "@/components/Try";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>this is main page heading</h1>
      <Try/>
    </div>
  );
}
