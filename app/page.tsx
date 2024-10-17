import Image from "next/image";
import animal from "../public/images/animal.jpg";

export default function Home() {
  return (
    <div>
        <Image className="w-full h-auto" src={animal} alt=""></Image>
    </div>
  );
}
