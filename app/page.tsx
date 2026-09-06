import Link from "next/link";
import { profile } from "@/content/profile";
import { KineticName } from "@/components/KineticName";

export default function Home() {
  return (
    <>
      <div className="home-atmos" aria-hidden="true" />
      <div className="home-frost" aria-hidden="true" />

      <div className="home-stage">
        <KineticName name={profile.name} />

        <div className="home-caption">
          <p className="home-hi">{profile.homeIntro}</p>
          <p className="home-cred">{profile.homeCredential}</p>
          <Link href="/contact" className="chip-btn home-cta">
            <span className="chip-face octagon">Contact me</span>
          </Link>
        </div>
      </div>
    </>
  );
}
