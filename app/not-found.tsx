import Link from "next/link";
import { Frame } from "@/components/Frame";
import { Lcd } from "@/components/Lcd";

export default function NotFound() {
  return (
    <Frame className="max-w-[26rem]">
      <Lcd as="h1">Err 404</Lcd>
      <p className="mt-5 font-display text-2xl">This page doesn’t exist.</p>
      <Link
        href="/"
        className="mt-5 inline-block font-mono text-sm text-accent transition-colors hover:text-ink"
      >
        ← Home
      </Link>
    </Frame>
  );
}
