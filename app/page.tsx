import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-250">
      <p className="text-6xl">heyyooo this is david wan :&gt;</p>
      <p className="text-3xl m-10">
        i'm a first year cs major here at ucsd!
        <br /> i like rock climbing, breakdancing, and snowboarding.
        <br /> i also like food a lot.
      </p>
      <Image
        src="/me.jpeg"
        alt="photo of me"
        width="300"
        height="300"
        className="rounded-lg"
      />
      <p>photo of me</p>
    </div>
  );
}
