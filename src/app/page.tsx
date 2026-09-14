import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <Image
          src="/mascot-celebrating.webp"
          alt="Plan Fun Games mascot"
          width={430}
          height={512}
          className="h-48 w-auto sm:h-64 object-contain"
          priority
        />
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Plan Fun Games
        </h1>
      </div>
    </main>
  );
}
