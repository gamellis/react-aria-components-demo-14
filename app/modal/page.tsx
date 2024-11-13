import ModalExample from "../../components/ModalExample"
import Link from "next/link"

export default function ModalPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start sm:mb-48 max-w-[56ch]">
        <ModalExample />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/many-modals" className="underline text-blue-500">
          to many modals
        </Link>
      </footer>
    </div>
  )
}
