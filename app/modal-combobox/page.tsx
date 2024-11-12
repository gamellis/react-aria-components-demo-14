import ModalCombobox from "@/components/ModalCombobox"

export default function ModalComboboxPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-w-0 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-wrap gap-2 row-start-2 sm:mb-48">
        <ModalCombobox />
      </main>
    </div>
  )
}
