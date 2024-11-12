"use client"

import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components"
import Button from "./Button"
import ComboBoxExample from "./Combobox"

function ModalCombobox() {
  return (
    <DialogTrigger>
      <Button label="Assign a role" variant="primary" size="xl" />

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
                  Assign role
                </Heading>
                <p className="mt-3 text-slate-500">
                  This will give the user a role. Are you sure you want to
                  assign? This will give them power to do things.
                </p>
                <div className="mt-2">
                  <ComboBoxExample />
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <Button label="Cancel" variant="text" onPress={close} />
                  <Button
                    label="Assign Role"
                    variant="primary"
                    onPress={close}
                  />
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}

export default ModalCombobox
