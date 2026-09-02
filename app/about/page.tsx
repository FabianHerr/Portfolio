import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Frame } from "@/components/Frame";
import { Lcd } from "@/components/Lcd";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Frame className="max-w-[40rem]">
      <Lcd as="h1">About</Lcd>
      <div className="mt-7 space-y-4 text-lg">
        {profile.about.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </Frame>
  );
}
