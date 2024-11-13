"use client"

import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components"
import Button from "./Button"

function ModalExample() {
  return (
    <DialogTrigger>
      <Button label="Delete" variant="danger" size="xl" />

      <ModalOverlay
        className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
      >
        <Modal
          className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
        >
          <Dialog role="alertdialog" className="outline-none relative">
            {({ close }) => (
              <>
                <Heading
                  slot="title"
                  className="text-xxl font-semibold leading-6 my-0 text-slate-700"
                >
                  Delete folder
                </Heading>
                <p className="mt-3 text-slate-500">
                  Are you sure you want to delete "Documents"? All contents will
                  be permanently destroyed.
                </p>
                <div className="mt-6 flex justify-end gap-2">
                  <Button label="Cancel" variant="default" onPress={close} />
                  <Button label="Delete" variant="danger" onPress={close} />
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}

export default ModalExample
