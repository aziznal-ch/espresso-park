import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="h-[200px] flex flex-col gap-8">
      <h1 className="text-6xl font-bold">espressopark</h1>

      <p className="w-[450px] text-balance text-zinc-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati autem neque perferendis earum. Maiores tenetur non temporibus ratione soluta mollitia atque neque?
      </p>

      <div className="flex gap-4">
        <Button>Buy our Coffee ☕</Button>
        <Button variant="outline">Contact Sales</Button>
      </div>
    </div>
  );
}
