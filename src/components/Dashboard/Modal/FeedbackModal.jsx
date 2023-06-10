import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
const FeedbackModal = ({ handlerFeedback, closeModal, isOpen }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Send Feedback For Deny Class!!!
                </Dialog.Title>
                <hr className="my-6" />
                <div className="form-control my-2">
                  <label className="label">
                    <span className="label-text">Your Feedback</span>
                  </label>
                  <textarea
                    name="feedback"
                    className="textarea textarea-bordered h-24 w-full"
                    placeholder="Enter your feedback"
                  ></textarea>
                </div>
                <div className="flex mt-6 justify-around items-center">
                  <button
                    onClick={closeModal}
                    className="btn btn-sm w-40 rounded-3xl"
                  >
                    cancel
                  </button>
                  <button onClick={handlerFeedback} className="btn btn-sm w-40 rounded-3xl">
                    send feedback
                  </button>
                </div>
                {/* Checkout form */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FeedbackModal;
