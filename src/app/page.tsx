import { SiteLanding } from "@/components/SiteLanding";
import { currentSite } from "@/lib/site";

export default async function Home() {
  const site = await currentSite();
  return <SiteLanding site={site} />;
}
