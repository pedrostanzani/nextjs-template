import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getServerAuthSession } from "@/lib/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();

  return (
    <main className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-1 text-2xl font-semibold tracking-tight">
        Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
      </h1>
      <div>
        <p className="mb-2">
          {session && <span>Logged in as {session.user?.name}</span>}
        </p>
        <div className="flex flex-row justify-center">
          <Button asChild>
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
              {session ? "Sign out" : "Sign in"}
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
