import { profile } from "@/content/profile";
import { Frame } from "@/components/Frame";

export default function Home() {
  return (
    <Frame iris className="max-w-[44rem]">
      <h1 className="font-sans text-[clamp(2rem,6vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.022em]">
        {profile.name}
      </h1>
      <p className="mt-5 text-[1.1875rem] leading-[1.5] text-ink-2">
        {profile.tagline}
      </p>
    </Frame>
  );
}
