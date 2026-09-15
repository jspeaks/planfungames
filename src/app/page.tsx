import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="mascot-stage">
          <div className="mascot-shadow" aria-hidden="true" />
          <div className="mascot-welcome">
            <Image
              src="/mascot-celebrating.webp"
              alt="A cheerful pickleball mascot waving a paddle in welcome"
              width={430}
              height={512}
              className="mascot-image"
              priority
            />
            <span className="paddle-wave paddle-wave-one" aria-hidden="true" />
            <span className="paddle-wave paddle-wave-two" aria-hidden="true" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Plan Fun Games
        </h1>
      </div>
    </main>
  );
}
