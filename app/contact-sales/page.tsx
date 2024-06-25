import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <Container>
      <h1 className="text-6xl font-bold">Contact Sales</h1>

      <form className="w-[400px] flex flex-col gap-4">
        <div>
          <Label>Name</Label>
          <Input />
        </div>

        <div>
          <Label>Email</Label>
          <Input type="email" />
        </div>

        <div>
          <Label>Phone Number</Label>
          <Input type="tel" />
        </div>

        <Button className="mt-4 self-end" size="lg">
          Submit
        </Button>
      </form>
    </Container>
  );
}
