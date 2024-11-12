import ModalInModalExample from "@/components/ModalInModalExample"
import Link from "next/link"

export default function ModalInModalPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-w-0 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-wrap gap-2 row-start-2 sm:mb-48">
        <ModalInModalExample />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/modal-combobox" className="underline text-blue-500">
          to many modal with combobox
        </Link>
      </footer>
    </div>
  )
}
