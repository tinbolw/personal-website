import Link from "next/link";

export default function Loading() {
  return (
    <div>
      <main className="flex flex-col min-h-screen items-center justify-center font-sans">
        <div className="bg-zinc-800 p-3 rounded-lg">
          <div className="flex justify-center">
            <h1 className="text-3xl">
              Projects
            </h1>
          </div>
          <div className="flex">
            Past, present, and future projects.
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex">
                <h2 className="text-2xl">Current</h2>
              </div>
              <LoadingRow />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <h2 className="text-2xl">Past</h2>
              </div>
              <div className="flex flex-row gap-2">
                <LoadingRow />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <h2 className="text-2xl">Future</h2>
              </div>
              <div className="flex flex-row gap-2">
                <LoadingRow />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <Link href={"/"}>Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function LoadingRow() {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col bg-zinc-900 p-3 rounded-lg">
        <div className="flex flex-col animate-pulse gap-2">
          <div className="bg-zinc-700 w-40 h-5 rounded-lg"></div>
          <div className="bg-zinc-700 w-40 h-5 rounded-lg"></div>
          <div className="flex flex-row gap-1">
            <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
            <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-zinc-900 p-3 rounded-lg">
        <div className="flex flex-col animate-pulse gap-2">
          <div className="bg-zinc-700 w-40 h-5 rounded-lg"></div>
          <div className="bg-zinc-700 w-40 h-5 rounded-lg"></div>
          <div className="flex flex-row gap-1">
            <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
            <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-zinc-900 p-3 rounded-lg">
        <div className="flex flex-col animate-pulse gap-2">
          <div className="bg-zinc-700 w-40 h-5 rounded-lg"></div>
          <div className="bg-zinc-700 w-40 h-5 rounded-lg"></div>
          <div className="flex flex-row gap-1">
            <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
            <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}