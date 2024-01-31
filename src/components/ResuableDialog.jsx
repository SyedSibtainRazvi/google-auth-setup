import React from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from './Button'

export const ReusableDialog = ({
  showDialog,
  closeDialog,
  nextActionClick,
  cancelActionClick,
  title,
  description,
  nextActionText,
  cancelActionText,
}) => {
  return (
    <Transition.Root show={showDialog} as={Fragment}>
      <Dialog as="div" className="z-10" onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Dialog.Title
                      as="h3"
                      className="text-dark-gray font-karla text-base font-bold"
                    >
                      {title}
                    </Dialog.Title>
                    {description && (
                      <div>
                        <p className="text-placeholder-color text-sm font-normal">
                          {description}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row-reverse gap-x-3">
                    <Button
                      type="button"
                      className="bg-blue-primary inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-white shadow-sm md:w-auto"
                      onClick={nextActionClick}
                    >
                      {nextActionText}
                    </Button>
                    <Button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:w-auto"
                      onClick={cancelActionClick}
                    >
                      {cancelActionText}
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
