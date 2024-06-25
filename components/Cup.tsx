import Image from "next/image";

export function Cup() {
  return (
    <Image
      src="/images/cup.webp"
      width={500}
      height={500}
      className="h-[400px] w-auto "
      alt="coffee-cup"
    />
  );
}
