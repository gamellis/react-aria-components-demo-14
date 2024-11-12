/* eslint-disable max-len */
import React from "react"
import {
  Dialog,
  DialogTrigger,
  ModalOverlay,
  ModalOverlayProps,
  Modal,
} from "react-aria-components"

type DialogContent = (close: () => void) => React.ReactNode

interface IProps {
  trigger: React.ReactNode
  dialogContent: DialogContent
  modalOverlayProps?: ModalOverlayProps
}

function ModalComponent(props: IProps) {
  return (
    <DialogTrigger>
      {props.trigger}
      <ModalOverlay
        className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-[#1f1e1e]/30 flex min-h-full items-center justify-center p-4
         ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
        {...props.modalOverlayProps}
      >
        <Modal
          className={({ isEntering, isExiting }) => `
            w-full max-w-2xl overflow-hidden rounded-2xl bg-neutral-100 shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
        >
          <Dialog role="alertdialog" className="relative outline-none">
            {({ close }) => <>{props.dialogContent(close)}</>}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}

export default ModalComponent
