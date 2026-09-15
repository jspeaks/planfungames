import { headers } from "next/headers";
import { getSiteByHost } from "@/sites";

export async function currentSite() {
  const headerList = await headers();
  return getSiteByHost(headerList.get("x-site-host") ?? headerList.get("host"));
}
