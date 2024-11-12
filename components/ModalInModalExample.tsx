"use client"
/* eslint-disable max-len */
import { Heading } from "react-aria-components"
import Button from "./Button"
import ModalComponent from "./ModalComponent"

const ModalInModalExample = () => {
  return (
    <ModalComponent
      modalOverlayProps={{ isDismissable: true }}
      trigger={<Button variant="primary" label="View details" size="xl" />}
      dialogContent={(close) => (
        <div className="px-8 pt-4 pb-8">
          <Heading slot="title" className="flex items-center justify-between">
            <h2 className="text-xl2 font-black">Details</h2>
            <Button variant="text" size="sm" label="Close" onPress={close} />
          </Heading>
          <div className="flex flex-col mt-4 border-t pt-8">
            <p>
              Here are some details about the offer. You can close this modal by
              clicking the button above.
            </p>
            <div className="ml-auto mt-4">
              <ModalComponent
                trigger={<Button variant="primary" label="View more" />}
                dialogContent={(close) => (
                  <div className="px-8 pt-4 pb-8">
                    <Heading
                      slot="title"
                      className="flex items-center justify-between"
                    >
                      <h2 className="text-xl2 font-black text-purple-900">
                        What?! Another modal?
                      </h2>
                      <Button
                        variant="text"
                        size="sm"
                        label="Close"
                        onPress={close}
                      />
                    </Heading>
                    <div className="flex flex-col mt-4 border-t pt-8">
                      <p>
                        Here are some more details about the offer. You can
                        close this modal by clicking the button above.
                      </p>
                      <div className="ml-auto mt-4">
                        <ModalComponent
                          trigger={
                            <Button
                              variant="danger"
                              label="Open another modal"
                            />
                          }
                          dialogContent={(close) => (
                            <div className="px-8 pt-4 pb-8">
                              <Heading
                                slot="title"
                                className="flex items-center justify-between"
                              >
                                <h2 className="text-xl2 font-black text-cyan-700">
                                  Three modals?! Really?
                                </h2>
                                <Button
                                  variant="text"
                                  size="sm"
                                  label="Close"
                                  onPress={close}
                                />
                              </Heading>
                              <div className="mt-4 border-t pt-8">
                                <p>
                                  Here are some more details about the offer.
                                  You can close this modal by clicking the
                                  button above.
                                </p>
                              </div>
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default ModalInModalExample
