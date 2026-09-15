import Image from "next/image";

export function MascotWelcome({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mascot-stage">
      <div className="mascot-shadow" aria-hidden="true" />
      <div className="mascot-welcome">
        <Image
          src={src}
          alt={alt}
          width={430}
          height={512}
          className="mascot-image"
          priority
        />
        <span className="paddle-wave paddle-wave-one" aria-hidden="true" />
        <span className="paddle-wave paddle-wave-two" aria-hidden="true" />
      </div>
    </div>
  );
}
