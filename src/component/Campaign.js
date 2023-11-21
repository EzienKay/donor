
import DonationForm from "./DonationForm";



const Campaign = () => {

  return (
    <>
      <div className="app-campaign" style={{position: "relative", top: "0px"}} >      
        <div className="app-campaign-container">
          <div className="spacer-28"></div>
          <header className="header">
            <div className="header-company">
              <div>
                <img
                  src="https://ucarecdn.com/7da37110-60df-4243-9943-78844df2f7e5/-/resize/x56/-/format/auto/"
                  className="header-company-logo"
                  width="56"
                  height="56"
                  alt="Muslimi"
                  data-testid="campaign-logo"
                />
              </div>
            </div>
            <div className="p-rel header-mediasharing flex-shrink-0 ms-5" role="group" aria-label="Donation sharing">
              <div className="d-flex align-items-center">
                <button type="button" className="btn-icon mediasharing-control line-height-18 mediasharing-facebook flex-shrink-0" aria-label="Share on Facebook" data-testid="facebook-sharing">
                  {/* Facebook icon */}
                  <span className="icon-slot flex-shrink-0 icon-slot-18 font-size-18" aria-hidden="true">
                    <span className="p-abs centered">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon-fill d-block">
                      <path d="m24 12c0 6.6274-5.3726 12-12 12-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12z" fill="currentColor">
                      </path>
                      <path d="m16.6713 15.4685.532-3.4689h-3.3282v-2.25093c0-.94901.465-1.8741 1.9557-1.8741h1.5131v-2.95318s-1.3732-.23438-2.6862-.23438c-2.741 0-4.5326 1.66128-4.5326 4.66884v2.64375h-3.04698v3.4689h3.04698v8.3856c.611.0958 1.237.1458 1.875.1458s1.264-.05 1.875-.1458v-8.3856z" fill="#fff">
                      </path>
                      </svg>
                    </span>
                  </span>
                </button>
                <button type="button" className="btn-icon mediasharing-control line-height-18 mediasharing-linkedin flex-shrink-0" aria-label="Share on LinkedIn" data-testid="linkedin-sharing">
                  {/* LinkedIn icon */}
                  <span className="icon-slot flex-shrink-0 icon-slot-18 font-size-18" aria-hidden="true">
                    <span className="p-abs centered">
                      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon-fill d-block">
                        <g clip-rule="evenodd" fill-rule="evenodd">
                          <path d="m2.66641 23.9977h18.66489c1.4726 0 2.6664-1.1938 2.6664-2.6664v-18.66489c0-1.47262-1.1938-2.66641-2.6664-2.66641h-18.66489c-1.47262 0-2.66641 1.19379-2.66641 2.66641v18.66489c0 1.4726 1.19379 2.6664 2.66641 2.6664z" fill="currentColor"></path>
                          <path d="m20.6642 20.6647h-3.5611v-6.0654c0-1.663-.6319-2.5923-1.9481-2.5923-1.4319 0-2.18.9671-2.18 2.5923v6.0654h-3.43196v-11.55446h3.43196v1.55636s1.0319-1.90937 3.4838-1.90937c2.4508 0 4.2054 1.49657 4.2054 4.59187zm-15.21543-13.06743c-1.16899 0-2.11625-.95469-2.11625-2.13213s.94726-2.13213 2.11625-2.13213c1.16898 0 2.11568.95469 2.11568 2.13213s-.9467 2.13213-2.11568 2.13213zm-1.7721 13.06743h3.57861v-11.55446h-3.57861z" fill="#fff"></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </button>
                <button type="button" className="btn-icon mediasharing-control line-height-18 mediasharing-twitter flex-shrink-0" aria-label="Share on Twitter" data-testid="twitter-sharing">
                  {/* Twitter icon */}
                  <span className="icon-slot flex-shrink-0 icon-slot-18 font-size-18" aria-hidden="true">
                    <span className="p-abs centered">
                      <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" className="icon-fill d-block">
                        <path d="m11.5952 8.6895 6.2104-7.21904h-1.4717l-5.3924 6.26819-4.30696-6.26819h-4.96755l6.51294 9.47864-6.51294 7.5703h1.47174l5.69457-6.6195 4.5484 6.6195h4.9676l-6.7544-9.8299zm-2.01572 2.3431-.6599-.9439-5.25056-7.51034h2.26051l4.23727 6.06111.6599.94386 5.5079 7.87847h-2.2605l-4.49462-6.4289z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </span>
                </button>
                <button type="button" className="mediasharing-control mediasharing-url flex-shrink-0 btn-icon line-height-18" aria-label="Copy link" data-testid="copy-link-sharing">
                  {/* Copy link icon */}
                  <span className="icon-slot icon-slot-18 flex-shrink-0" aria-hidden="true">
                    <span className="p-abs centered font-size-18">
                      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon-stroke d-block">
                        <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                          <path d="m10 13c.4295.5741.9774 1.0491 1.6066 1.3929.6291.3438 1.3249.5482 2.0401.5994.7151.0512 1.4329-.052 2.1046-.3026.6718-.2505 1.2818-.6427 1.7887-1.1497l3-3c.9108-.94305 1.4148-2.20606 1.4034-3.51704s-.5373-2.56505-1.4643-3.49209-2.1811-1.45288-3.4921-1.46427c-1.311-.0114-2.574.49258-3.517 1.40337l-1.72 1.71"></path>
                          <path d="m14.0002 11c-.4295-.5741-.9774-1.0492-1.6066-1.39296-.6291-.34376-1.3249-.54818-2.0401-.59939-.71509-.05122-1.43289.05196-2.10465.30255-.67175.25059-1.28176.64271-1.78865 1.1498l-3 3c-.91079.943-1.41476 2.206-1.40337 3.517s.53724 2.565 1.46428 3.4921c.92704.927 2.1811 1.4529 3.49208 1.4643 1.31099.0113 2.574-.4926 3.51701-1.4034l1.71-1.71"></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>        
          </header>
          <div className="spacer-40"></div>
          <section className="campaign" data-qa="campaign-info-section">
            <h1 className="title-1 text-ellipsis" dir="auto" data-qa="ask-title">
              <span className="emoji-symbol">🚨</span> 
              Urgent Gaza Appeal
            </h1>
            <div className="spacer-32"></div>
            <div className="campaign-meter" data-qa="campaign-meter-full">
              <div className="campaign-meter-raised" data-testid="raised-percent" data-qa="campaign-meter-raised" style={{width: "85%", maxWidth: "100%"}}></div>
              <div className="campaign-meter-impact" data-testid="impact-percent" data-qa="campaign-meter-impact" style={{width: "1%", maxWidth: "15%", left: "calc(85% + 2px)", right: "auto"}}></div>
              <div className="campaign-meter-unfilled" style={{width: "calc(14% - 4px)"}}></div>
              <div className="ui-tooltip ui-tooltip-desktop ui-tooltip-top ui-tooltip-sm w-auto ui-tooltip-to-top-enter-done" role="status" aria-live="polite" style={{position: "absolute", top: "-32px", left: "489.008px", maxWidth: "200px"}}>
                <div className="ui-tooltip-body ui-tooltip-body-desktop">
                  <p className="text-center text-truncate">
                    Your impact
                  </p>
                </div>
                <div className="ui-tooltip-arrow" style={{left: "42px", bottom: "-6px"}}></div></div></div>
                <div className="d-flex align-items-baseline justify-content-space-between mt-1">
                  <p className="body-2 text-ellipsis campaign-meter-raised-amount" data-qa="fundraiser-raised-amount" data-testid="raised-amount">
                    <strong>$426,064.48</strong> 
                      raised
                  </p>
                  <p className="body-2 text-gray-60 text-sans-serif text-right text-ellipsis ms-3" data-testid="total-amount" data-qa="fundraiser-goal-amount">
                    $500K
                  </p>
                </div>
                <div className="spacer-40"></div>
                <div className="bg-gray-10 overflow-hidden border-radius-16">
                  <img className="d-block w-100 h-auto" src="https://ucarecdn.com/defce42f-83ed-43d3-8f79-a1cffc5dd09b/-/resize/624x/-/format/auto/" alt="Campaign" width="624" height="352" data-qa="ask-image" />
                </div>
                  <div className="spacer-20"></div>
                  <p className="text-ellipsis" dir="auto" data-qa="ask-message">
                    <strong>
                      <span className="emoji-symbol">
                        🤝
                      </span> 
                      Our charity partners are delivering aid to our brothers and sisters in Gaza.
                      <br /><br />
                      <span className="emoji-symbol">
                        ⚠️
                      </span> 
                      The overall death toll in Palestine is 9,000+ (40% are children), and over 32,000 are injured. 2.3 million people are at risk.
                    </strong>
                      <br /><br />
                    <span className="emoji-symbol">
                      💡
                    </span> 
                      Muslimi is working with our charity partners to ensure your aid is delivered in Gaza. Your donation is an Amana, which will reach our partners on the ground. Our charity partners have emergency aid stockpiles and are getting resources from within Gaza; though these resources are being reduced daily, they are being replenished as the Egypt-Rafah border crossing is slowly letting aid in inshaAllah.
                      <br />
                    <strong>
                      <br />
                      The Rafah border crossing between Egypt and Gaza has opened to let needed aid flow to Palestinians running short of food, medicine, and water in Gaza. Meanwhile, aid deliveries have come as the Israeli military continued bombing Gaza and Rafah.
                      <br />
                    </strong>
                      <br />
                    <strong>
                      Your Urgent Support is Needed
                    </strong>:
                      <br /><br />
                      Our brothers and sisters in Gaza are facing a calamity and need urgent help. Your generous support can provide the much-needed relief and hope. 
                    <strong>
                      The Prophet Muhammad (Peace Be Upon Him) said, “The believer’s shade on the Day of Resurrection will be his charity.” (Al-Tirmidhi).
                    </strong> Let your charity be the shade for the distressed souls in Gaza, embodying the mercy and compassion that Islam teaches us.
                      <br /><br />
                    <strong>
                      What does your donation provide?
                    </strong>
                      <br /><br />
                    <strong>
                      <span className="emoji-symbol">
                        🍞
                      </span> 
                      Food Supplies
                    </strong>: 
                      Emergency food packs to fend off hunger.
                      <br />
                    <strong>
                      <span className="emoji-symbol">
                        💧
                      </span> 
                      Clean Water: 
                    </strong>
                      Safe drinking sources and purification solutions. (Water Tanks)
                    <strong>
                      <br />
                      <span className="emoji-symbol">
                        🏥
                      </span> 
                      Medical Aid
                    </strong>
                      : Vital medical supplies to the hospitals.
                      <br />
                    <strong>
                      <span className="emoji-symbol">
                        ⛺
                      </span>️
                      Shelter
                    </strong>
                    : A safe haven for those displaced by the ongoing violence.<br /><br />Your donation right now can be the lifeline for many in Gaza. Let’s unite in this hour of dire need and show that the Ummah stands united with the innocent civilians in Gaza.<br /><br />
                    <span className="emoji-symbol">
                      🆘
                    </span> 
                      $75 USD = 15 Hot Meals<br />
                    <span className="emoji-symbol">
                      🆘
                    </span> 
                      $100 USD = Emergency Food Pack<br />
                    <span className="emoji-symbol">
                      🆘
                    </span> 
                      $125 USD = Clean Drinking Water<br />
                    <span className="emoji-symbol">
                      🆘
                    </span> 
                      $200 USD = Emergency Medical Supplies to Hospitals<br />
                    <span className="emoji-symbol">
                      🆘
                    </span> 
                      $500 USD = Emergency Shelter<br />
                    <span className="emoji-symbol">
                      🆘
                    </span> 
                      $1,000 USD = Emergency Aid Combo (Meals, Water, Aid, Shelter)<br /><br />Ya Allah, protect the innocent souls of Gaza, grant them strength, and ease their suffering. Provide security and safety for every human, and let there be peace in every corner of the world. Guide us to be their beacon of hope, to extend our hands when they need it most, and to be the answer to their prayers. Ameen!<br /><br />Please, we implore you, donate now. They need us. They're counting on us.<br /><br />
                    <strong>
                      <span className="emoji-symbol">
                        ✅
                      </span> 
                      YOUR DONATION IS ZAKAT-ELIGIBLE
                    </strong>
                  </p>
                  <div className="spacer-40"></div>
                  <h3 className="title-4 text-ellipsis">Recent donations</h3>
                  <div className="spacer-20"></div>
                  {Array(5).fill().map((backing, i) => (
                    <div key={i} className="px-5 pt-4 mb-4 border border-gray-15 border-radius-16 pb-4 d-flex flex-row-reverse align-items-flex-start" data-testid="donor-impact-section-DUCPURLF">
                      <p className="body-1 text-primary text-sans-serif flex-shrink-0 ms-5" style={{marginTop: "-2px"}}>{279.00 + i}&nbsp;MVR</p>
                      <div className="flex-grow-1 me-auto" style={{maxWidth: "450px"}}>
                        <p className="label-3 text-ellipsis">
                          <strong>nasheeda a.</strong> made a one-time donation
                        </p>
                        <p className="label-5 text-gray-80 text-ellipsis mt-1">
                          <span className="icon-slot icon-slot-14 d-inline-block me-2" aria-hidden="true">
                            <span className="p-abs centered">
                              <img src="https://static.fundraiseup.com/src/images/flags/MV.png" width="14" height="14" className="d-block" alt="MV" />
                            </span>
                          </span>
                            Malé, Maldives
                          <span className="d-inline-block text-gray-40 mx-1">·</span>
                          <span className="d-inline-block text-nowrap">25 minutes ago{new Date().getTime()}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="spacer-16"></div>                         
                
          </section>
          <div class="spacer-80"></div>  
        </div>      
      </div> 
      <DonationForm /> 




      {/* <div className="app-flow" style={{position: "relative", top: "133px"}}>
        <div className="app-flow-container">
          <div className="spacer-40"></div>
          <div className="flow">
            <div className="flow-slide">
              <form aria-label="Secure donation screen, donation checkout" data-qa="fiat-donate-form">
                <div className="flow-header">
                  <h2 className="title-3 text-ellipsis">Secure donation</h2>
                </div>
                <div className="spacer-24"></div>
                <div className="flow-body">
                  <div className="frequency" aria-label="Donation frequency">
                    <button type="button" className="frequency-btn frequency-btn-selected" aria-current="true" data-qa="less-frequent-button" data-tracking-element-name="onceRepeat">
                      <span className="text-truncate">Give once</span>
                    </button>
                    <button type="button" className="frequency-btn" aria-current="false" data-qa="more-frequent-button" data-tracking-element-name="monthlyPlan">
                      <span className="p-rel flex-shrink-0 text-fuchsia-80 me-1" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="d-block">
                          <path d="M12 20C28.659 10.9628 18.2615 0.617428 12 6.95101C5.73851 0.617357 -4.659 10.9627 12 20Z" fill="currentColor"></path>
                        </svg>
                        <span className="p-abs top-left z-index-1">
                          <span className="d-block"></span>
                        </span>
                      </span>
                      <span className="text-truncate">Monthly</span>
                    </button>
                  </div>
                  <div className="spacer-20"></div>
                  <div className="suggestion" aria-label="Suggested amounts">
                    <div className="suggestion-amount" data-qa="suggested-amount-button">
                      <input type="radio" id="40000000-option" className="suggestion-amount-radio" title="₦400K" name="suggestionAmounts" aria-label="₦400K donation" data-tracking-element-name="suggestionButton" value="40000000" />
                      <label for="40000000-option" className="suggestion-amount-label" aria-hidden="true">
                        <span className="text-truncate text-sans-serif">₦400K</span>
                      </label>
                    </div>
                    <div className="suggestion-amount" data-qa="suggested-amount-button">
                      <input type="radio" id="15000000-option" className="suggestion-amount-radio" title="₦150K" name="suggestionAmounts" aria-label="₦150K donation" data-tracking-element-name="suggestionButton" value="15000000" />
                      <label for="15000000-option" className="suggestion-amount-label" aria-hidden="true">
                        <span className="text-truncate text-sans-serif">₦150K</span>
                      </label>
                    </div>
                    <div className="suggestion-amount" data-qa="suggested-amount-button">
                      <input type="radio" id="8000000-option" className="suggestion-amount-radio" title="₦80K" name="suggestionAmounts" aria-label="₦80K donation" data-tracking-element-name="suggestionButton" value="8000000" />
                      <label for="8000000-option" className="suggestion-amount-label" aria-hidden="true">
                        <span className="text-truncate text-sans-serif">₦80K</span>
                      </label>
                    </div>
                    <div className="suggestion-amount" data-qa="suggested-amount-button">
                      <input type="radio" id="4000000-option" className="suggestion-amount-radio" title="₦40K" name="suggestionAmounts" aria-label="₦40K donation" data-tracking-element-name="suggestionButton" value="4000000" />
                      <label for="4000000-option" className="suggestion-amount-label" aria-hidden="true">
                        <span className="text-truncate text-sans-serif">₦40K</span>
                      </label>
                    </div>
                    <div className="suggestion-amount" data-qa="suggested-amount-button">
                      <input type="radio" id="1500000-option" className="suggestion-amount-radio" title="₦15K" name="suggestionAmounts" aria-label="₦15K donation" data-tracking-element-name="suggestionButton" value="1500000" checked="" />
                      <label for="1500000-option" className="suggestion-amount-label" aria-hidden="true">
                        <span className="text-truncate text-sans-serif">₦15K</span>
                      </label>
                    </div>
                    <div className="suggestion-amount" data-qa="suggested-amount-button">
                      <input type="radio" id="800000-option" className="suggestion-amount-radio" title="₦8,000" name="suggestionAmounts" aria-label="₦8,000 donation" data-tracking-element-name="suggestionButton" value="800000" />
                      <label for="800000-option" className="suggestion-amount-label" aria-hidden="true">
                        <span className="text-truncate text-sans-serif">₦8,000</span>
                      </label>
                    </div>
                  </div>
                  <div className="spacer-12"></div>
                  <div className="price-control-group" aria-label="Donation amount">
                    <div className="flex-shrink-0 align-self-center me-1 body-3 text-gray-80" aria-hidden="true" data-qa="currency-symbol">₦</div>
                    <label className="flex-grow-1">
                      <span className="sr-only">Donation amount NGN</span>
                      <input className="price-control text-sans-serif" autocomplete="off" placeholder="Other" inputmode="decimal" data-qa="amount" data-tracking-element-name="amountInput" data-testid="price-input" value="15,000" />
                    </label>
                    <div className="flex-shrink-0 align-self-center p-rel">
                      <label className="sr-only" for="currency-4533812792886991732">Donation currency NGN</label>
                      <select id="currency-4533812792886991732" className="currency-select-control p-abs top-left bottom-right max-w-100 p-0 border-0 m-0 overflow-hidden cursor-pointer z-index-1" data-qa="currency-selector" data-tracking-element-name="changeCurrency">
                        <optgroup>
                          <option value="USD">USD · US Dollar</option>
                          <option value="NGN">NGN · Nigerian Naira</option>
                        </optgroup>
                        <optgroup>
                          <option value="AED">AED · United Arab Emirates Dirham</option>
                          <option value="AFN">AFN · Afghan Afghani</option>
                          <option value="ALL">ALL · Albanian Lek</option>
                          <option value="AMD">AMD · Armenian Dram</option>
                          <option value="ANG">ANG · Netherlands Antillean Guilder</option>
                          <option value="AOA">AOA · Angolan Kwanza</option>
                          <option value="ARS">ARS · Argentine Peso</option>
                          <option value="AUD">AUD · Australian Dollar</option>
                          <option value="AWG">AWG · Aruban Florin</option>
                          <option value="AZN">AZN · Azerbaijani Manat</option>
                          <option value="BAM">BAM · Bosnia-Herzegovina Convertible Mark</option>
                          <option value="BBD">BBD · Barbadian Dollar</option>
                          <option value="BDT">BDT · Bangladeshi Taka</option>
                          <option value="BGN">BGN · Bulgarian Lev</option>
                          <option value="BIF">BIF · Burundian Franc</option>
                          <option value="BMD">BMD · Bermudan Dollar</option>
                          <option value="BND">BND · Brunei Dollar</option>
                          <option value="BOB">BOB · Bolivian Boliviano</option>
                          <option value="BRL">BRL · Brazilian Real</option>
                          <option value="BSD">BSD · Bahamian Dollar</option>
                          <option value="BWP">BWP · Botswanan Pula</option>
                          <option value="BYN">BYN · Belarusian Ruble</option>
                          <option value="BZD">BZD · Belize Dollar</option>
                          <option value="CAD">CAD · Canadian Dollar</option>
                          <option value="CDF">CDF · Congolese Franc</option>
                          <option value="CHF">CHF · Swiss Franc</option>
                          <option value="CLP">CLP · Chilean Peso</option>
                          <option value="CNY">CNY · Chinese Yuan</option>
                          <option value="COP">COP · Colombian Peso</option>
                          <option value="CRC">CRC · Costa Rican Colón</option>
                          <option value="CVE">CVE · Cape Verdean Escudo</option>
                          <option value="CZK">CZK · Czech Koruna</option>
                          <option value="DJF">DJF · Djiboutian Franc</option>
                          <option value="DKK">DKK · Danish Krone</option>
                          <option value="DOP">DOP · Dominican Peso</option>
                          <option value="DZD">DZD · Algerian Dinar</option>
                          <option value="EGP">EGP · Egyptian Pound</option>
                          <option value="ETB">ETB · Ethiopian Birr</option>
                          <option value="EUR">EUR · Euro</option>
                          <option value="FJD">FJD · Fijian Dollar</option>
                          <option value="FKP">FKP · Falkland Islands Pound</option>
                          <option value="GBP">GBP · British Pound</option>
                          <option value="GEL">GEL · Georgian Lari</option>
                          <option value="GIP">GIP · Gibraltar Pound</option>
                          <option value="GMD">GMD · Gambian Dalasi</option>
                          <option value="GNF">GNF · Guinean Franc</option>
                          <option value="GTQ">GTQ · Guatemalan Quetzal</option>
                          <option value="GYD">GYD · Guyanaese Dollar</option>
                          <option value="HKD">HKD · Hong Kong Dollar</option>
                          <option value="HNL">HNL · Honduran Lempira</option>
                          <option value="HTG">HTG · Haitian Gourde</option>
                          <option value="HUF">HUF · Hungarian Forint</option>
                          <option value="IDR">IDR · Indonesian Rupiah</option>
                          <option value="ILS">ILS · Israeli New Shekel</option>
                          <option value="INR">INR · Indian Rupee</option>
                          <option value="ISK">ISK · Icelandic Króna</option>
                          <option value="JMD">JMD · Jamaican Dollar</option>
                          <option value="JPY">JPY · Japanese Yen</option>
                          <option value="KES">KES · Kenyan Shilling</option>
                          <option value="KGS">KGS · Kyrgystani Som</option>
                          <option value="KHR">KHR · Cambodian Riel</option>
                          <option value="KMF">KMF · Comorian Franc</option>
                          <option value="KRW">KRW · South Korean Won</option>
                          <option value="KYD">KYD · Cayman Islands Dollar</option>
                          <option value="KZT">KZT · Kazakhstani Tenge</option>
                          <option value="LAK">LAK · Laotian Kip</option>
                          <option value="LBP">LBP · Lebanese Pound</option>
                          <option value="LKR">LKR · Sri Lankan Rupee</option>
                          <option value="LRD">LRD · Liberian Dollar</option>
                          <option value="LSL">LSL · Lesotho Loti</option>
                          <option value="MAD">MAD · Moroccan Dirham</option>
                          <option value="MDL">MDL · Moldovan Leu</option>
                          <option value="MGA">MGA · Malagasy Ariary</option>
                          <option value="MKD">MKD · Macedonian Denar</option>
                          <option value="MMK">MMK · Myanmar Kyat</option>
                          <option value="MNT">MNT · Mongolian Tugrik</option>
                          <option value="MOP">MOP · Macanese Pataca</option>
                          <option value="MRO">MRO · Mauritanian Ouguiya (1973–2017)</option>
                          <option value="MUR">MUR · Mauritian Rupee</option>
                          <option value="MVR">MVR · Maldivian Rufiyaa</option>
                          <option value="MWK">MWK · Malawian Kwacha</option>
                          <option value="MXN">MXN · Mexican Peso</option>
                          <option value="MYR">MYR · Malaysian Ringgit</option>
                          <option value="MZN">MZN · Mozambican Metical</option>
                          <option value="NAD">NAD · Namibian Dollar</option>
                          <option value="NGN">NGN · Nigerian Naira</option>
                          <option value="NIO">NIO · Nicaraguan Córdoba</option>
                          <option value="NOK">NOK · Norwegian Krone</option>
                          <option value="NPR">NPR · Nepalese Rupee</option>
                          <option value="NZD">NZD · New Zealand Dollar</option>
                          <option value="PAB">PAB · Panamanian Balboa</option>
                          <option value="PEN">PEN · Peruvian Sol</option>
                          <option value="PGK">PGK · Papua New Guinean Kina</option>
                          <option value="PHP">PHP · Philippine Piso</option>
                          <option value="PKR">PKR · Pakistani Rupee</option>
                          <option value="PLN">PLN · Polish Zloty</option>
                          <option value="PYG">PYG · Paraguayan Guarani</option>
                          <option value="QAR">QAR · Qatari Rial</option>
                          <option value="RON">RON · Romanian Leu</option>
                          <option value="RSD">RSD · Serbian Dinar</option>
                          <option value="RUB">RUB · Russian Ruble</option>
                          <option value="RWF">RWF · Rwandan Franc</option>
                          <option value="SAR">SAR · Saudi Riyal</option>
                          <option value="SBD">SBD · Solomon Islands Dollar</option>
                          <option value="SCR">SCR · Seychellois Rupee</option>
                          <option value="SEK">SEK · Swedish Krona</option>
                          <option value="SGD">SGD · Singapore Dollar</option>
                          <option value="SHP">SHP · St. Helena Pound</option>
                          <option value="SLE">SLE · Sierra Leonean Leone</option>
                          <option value="SLL">SLL · Sierra Leonean Leone</option>
                          <option value="SOS">SOS · Somali Shilling</option>
                          <option value="SRD">SRD · Surinamese Dollar</option>
                          <option value="STD">STD · São Tomé &amp; Príncipe Dobra (1977–2017)</option>
                          <option value="SZL">SZL · Swazi Lilangeni</option>
                          <option value="THB">THB · Thai Baht</option>
                          <option value="TJS">TJS · Tajikistani Somoni</option>
                          <option value="TOP">TOP · Tongan Paʻanga</option>
                          <option value="TRY">TRY · Turkish Lira</option>
                          <option value="TTD">TTD · Trinidad &amp; Tobago Dollar</option>
                          <option value="TWD">TWD · New Taiwan Dollar</option>
                          <option value="TZS">TZS · Tanzanian Shilling</option>
                          <option value="UAH">UAH · Ukrainian Hryvnia</option>
                          <option value="USD">USD · US Dollar</option>
                          <option value="UYU">UYU · Uruguayan Peso</option>
                          <option value="UZS">UZS · Uzbekistani Som</option>
                          <option value="VND">VND · Vietnamese Dong</option>
                          <option value="VUV">VUV · Vanuatu Vatu</option>
                          <option value="WST">WST · Samoan Tala</option>
                          <option value="XAF">XAF · Central African CFA Franc</option>
                          <option value="XCD">XCD · East Caribbean Dollar</option>
                          <option value="XOF">XOF · West African CFA Franc</option>
                          <option value="XPF">XPF · CFP Franc</option>
                          <option value="YER">YER · Yemeni Rial</option>
                          <option value="ZAR">ZAR · South African Rand</option>
                          <option value="ZMW">ZMW · Zambian Kwacha</option>
                        </optgroup>
                      </select>
                    </div>
                
                    <div className="d-flex align-items-center ps-3 pe-2 py-2 currency-select" aria-hidden="true">
                      <span className="label-3" data-qa="selected-currency">NGN</span>
                      <span className="icon-slot icon-slot-16 flex-shrink-0 ms-1">
                        <span className="p-abs centered font-size-16">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" className="icon-stroke d-block">
                            <path d="m4 6 4 4 4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>              
                  <div className="spacer-28"></div>
                  <div className="ui-checkbox">
                    <label className="ui-checkbox-label">
                      <span className="ui-checkbox-control">
                        <input type="checkbox" data-qa="tribute-give-checkbox" data-tracking-element-name="tributeCheckbox" value="" />
                        <span className="ui-checkbox-icon"></span>
                      </span>
                      <span className="ui-checkbox-text">
                        <span className="text-truncate" data-qa="tribute-label">Dedicate this donation</span>
                      </span>
                    </label>
                  </div>
                  <div className="spacer-28"></div>
                  <div className="d-flex">
                    <div className="p-rel" data-qa="goal-component">
                      <select id="designation-7493619203107649626" className="designation-select-control p-abs top-left bottom-right max-w-100 p-0 border-0 m-0 overflow-hidden cursor-pointer z-index-1" data-qa="goal-selector" data-tracking-element-name="goalSelect">
                        <option value="EL6VVAKZ">where needed most</option>
                        <option value="EWT5F645">Zakat</option>
                      </select>
                      <label for="designation-7493619203107649626" className="designation-select text-line-clamp-2">
                        <span className="label-3 d-inline text-nowrap me-2">Designate to</span>
                        <span className="link-1 text-decor designation-select-label" aria-hidden="true" dir="ltr" data-qa="selected-goal">
                          where needed 
                          <span className="text-nowrap">
                            most
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" className="icon-stroke d-inline text-middle">
                              <path d="m4 6 4 4 4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="spacer-40"></div>
                  <button type="submit" className="btn btn-primary" data-qa="donate-button" data-tracking-element-name="nextButton">Donate</button>
                </div>
                <div className="spacer-48"></div>
              </form>
            </div>
            



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
      </div> */}
    </>
  )
}

export default Campaign