import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <div className="text-center font-sans m-auto container items-center">
      <div className="font-bold text-9xl mx-auto mb-8 fit-content p-10 border-b-2">
        KevEngine
      </div>
      <div className="text-2xl mb-4">Kevin Liu</div>
      <div className="mb-8">
        <Link className="border p-3 button-hover rounded-md" href="">
          Documentation
        </Link>
      </div>
      <div>
        <Link
          className="border p-3 button-hover rounded-md"
          href="https://drive.google.com/file/d/112X8ibhNWEph6bIn3DCQBj-K4Lbjv-O8/view?usp=drive_link"
        >
          Files
        </Link>
      </div>
    </div>
  );
}
