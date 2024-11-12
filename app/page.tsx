import Link from "next/link"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start sm:mb-48 max-w-[56ch]">
        <h1 className="text-xl font-black tracking-widest uppercase text-blue-600">
          Hello Team!
        </h1>
        <h2 className="text-6xl font-black tracking-tight">
          React aria components
        </h2>
        <p className="text-xl">
          React Aria is a library of unstyled React components and hooks that
          helps you build accessible, high quality UI components for your
          application or design system. It provides components for common UI
          patterns, with accessibility, internationalization, interactions, and
          behavior built in, allowing you to focus on your unique design and
          styling rather than re-building these challenging aspects. React Aria
          has been meticulously tested across a wide variety of devices,
          interaction modalities, and assistive technologies to ensure the best
          experience possible for all users.
        </p>
        <Link href="/modal" className="underline text-blue-500">
          to the modal
        </Link>
      </main>
    </div>
  )
}
