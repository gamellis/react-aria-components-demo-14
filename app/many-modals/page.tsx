"use client"
import { Link } from "react-aria-components"
import ModalExample from "../../components/ModalExample"

export default function ManyModalsPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-w-0 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-wrap gap-2 row-start-2 sm:mb-48">
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
        <ModalExample />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/many-modals-in-modals" className="underline text-blue-500">
          to many modals in modals
        </Link>
      </footer>
    </div>
  )
}
