import React, { useState } from "react";

const CryptoDonation = () => {
  const [dedicateDonation, setDedicateDonation] = useState(false);

  const handleDedicateDonationChange = () => {
    setDedicateDonation(!dedicateDonation);
  };

  return (
    <>
      <div
        className="app-flow kay-test app-flow "
        style={{ position: "fixed" }}
      >
        <div className="app-flow-container">
          <div className="spacer-40"></div>
          <div className="flow">
            <div className="flow-slide">
              <button
                type="button"
                className="btn-link label-5 d-flex align-items-center text-gray-60-hover-gray-100 text-nodecor"
                data-qa="back-checkout"
                data-tracking-element-name="backButton"
              >
                <span
                  className="icon-slot icon-slot-12 flex-shrink-0 me-1"
                  aria-hidden="true"
                >
                  <span className="p-abs centered font-size-12">
                    <svg
                      fill="none"
                      height="12"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-stroke d-block"
                      data-testid="back-icon"
                    >
                      <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9.5 6h-7"></path>
                        <path d="m6 9.5-3.5-3.5 3.5-3.5"></path>
                      </g>
                    </svg>
                  </span>
                </span>
                <span className="text-nowrap">Back</span>
              </button>
              <form
                aria-label="Secure donation screen, donation checkout"
                data-qa="fiat-donate-form"
              >
                <div className="spacer-8"></div>
                <h2 class="title-3 text-ellipsis">
                  Payment with Cryptocurrency
                </h2>

                <div className="spacer-24"></div>
                <div className="flow-body">
                  <div className="spacer-12"></div>
                  {/* Custom Donation Amount Input */}
                  <div
                    className="price-control-group"
                    aria-label="Donation amount"
                  >
                    {/* <div className="flex-shrink-0 align-self-center me-1 body-3 text-gray-80" aria-hidden="true" data-qa="currency-symbol">₦</div> */}
                    <label className="flex-grow-1">
                      <span className="sr-only">Donation amount NGN</span>
                      <input
                        className="price-control text-sans-serif "                        
                        // defaultValue={0.01}
                        type="number" 
                        step={0.01}
                        min={0.01}
                        name="amount"
                        required
                        placeholder="type in your donation..."
                        // autocomplete="off"
                        // inputmode="decimal"
                        // data-qa="amount"
                        // data-tracking-element-name="amountInput"
                        // data-testid="price-input"
                      />
                    </label>
                    <div
                      className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
                    ></div>
                    {/* <div className="flex-shrink-0 align-self-center p-rel">
                        <label className="sr-only" for="ETH">Donation currency NGN</label>
                        <select id="ETH" className="currency-select-control p-abs top-left bottom-right max-w-100 p-0 border-0 m-0 overflow-hidden cursor-pointer z-index-1" data-qa="currency-selector" data-tracking-element-name="changeCurrency">
                            
                        </select>
                        </div> */}

                    <div
                      className="d-flex align-items-center ps-3 pe-2 py-2 currency-select"
                      aria-hidden="true"
                    >
                      <span
                        className="label-3 kay-label"
                        data-qa="selected-currency"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                        </svg>
                        ETH
                      </span>
                      {/* <span className="icon-slot icon-slot-16 flex-shrink-0 ms-1">
                            <span className="p-abs centered font-size-16">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" className="icon-stroke d-block">
                                <path d="m4 6 4 4 4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </span>
                        </span> */}
                    </div>

                    {/* Custom donation amount input */}
                  </div>
                  <div className="spacer-28"></div>
                  {/* Dedicate Donation Checkbox */}
                  <div className="ui-checkbox">
                    <label className="ui-checkbox-label">
                      <span className="ui-checkbox-control">
                        <input
                          type="checkbox"
                          checked={dedicateDonation}
                          onChange={handleDedicateDonationChange}
                          data-qa="tribute-give-checkbox"
                          data-tracking-element-name="tributeCheckbox"
                        />
                        <span className="ui-checkbox-icon"></span>
                      </span>
                      <span className="ui-checkbox-text">
                        <span className="text-truncate" data-qa="tribute-label">
                          Dedicate this donation
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="spacer-28"></div>
                  <div className="d-flex">
                    <div className="p-rel" data-qa="goal-component">
                      <select
                        id="designation-{#}"
                        className="designation-select-control p-abs top-left bottom-right max-w-100 p-0 border-0 m-0 overflow-hidden cursor-pointer z-index-1"
                        data-qa="goal-selector"
                        data-tracking-element-name="goalSelect"
                      >
                        <option value="EL6VVAKZ">where needed most</option>
                        <option value="EWT5F645">Zakat</option>
                      </select>
                      <label
                        for="designation-{#}"
                        className="designation-select text-line-clamp-2"
                      >
                        <span className="label-3 d-inline text-nowrap me-2">
                          Designate to
                        </span>
                        <span
                          className="link-1 text-decor designation-select-label"
                          aria-hidden="true"
                          dir="ltr"
                          data-qa="selected-goal"
                        >
                          where needed
                          <span className="text-nowrap">
                            most
                            <svg
                              fill="none"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon-stroke d-inline text-middle"
                            >
                              <path
                                d="m4 6 4 4 4-4"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="spacer-40"></div>
                  {/* Donate Button */}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-qa="donate-button"
                    data-tracking-element-name="nextButton"
                  >
                    Donate
                  </button>
                </div>
              </form>
            </div>
            {/* Flow Footer */}
            <div className="flow-footer">
              <hr className="my-0" />
              <div className="spacer-16"></div>
              <div>
                <button
                  type="button"
                  className="btn-link link-3 text-left text-gray-60-hover-gray-100 text-break-word max-w-100 me-3"
                  data-qa="is-donation-secure"
                >
                  Is my donation secure?
                </button>
                <button
                  type="button"
                  className="btn-link link-3 text-left text-gray-60-hover-gray-100 text-break-word max-w-100 me-3"
                  data-qa="cancel-recurring-donation"
                >
                  Can I cancel my recurring donation?
                </button>
              </div>
            </div>
            <div className="spacer-80"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDonation;
