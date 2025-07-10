import { Suspense } from "react";
import GenerateClient from "./GenerateClient";

export default function GeneratePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading BitTree Generator...</div>}>
      <GenerateClient />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";