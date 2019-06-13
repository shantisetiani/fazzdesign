
import React, { Component } from 'react'
import Link from 'next/link'
import Site from '../../../components/layouts/site'
import { Container, Row, Col } from '../../../components/fazz-inc'


class Iconography extends Component {
  render() {
    return (
      <Site 
        title="Iconography - FazzDesign"
        description="Design Sistem"
      >
        <article className="article article--container">
          <h4 className="article__before-title ls-2">Foundation</h4>
          <h1 className="article__title">Iconography</h1>
          
          <p>
            Icons are line graphics which are used to explain information. They are designed on a 24px x 24px transparent container and should be on the left side of the navigation bar. They have 3 different colors: primary color, accent color, and shading color.
          </p>

          <div style={{ marginLeft: '20px', marginBottom: '50px' }}>
            <img src="/static/images/size-icon@2x.png" style={{ width: '440px', marginBottom: '40px' }} />
            <div className="fazz-row fazz-row-mobile-2">
              <div className="fazz-col-3">
                <img src="/static/images/base-stroke@2x.png" />
                <h4><strong>Base stroke</strong></h4>
                <p>The stroke weight is 2px</p>
              </div>
              <div className="fazz-col-3">
                <img src="/static/images/base-corner@2x.png" />
                <h4><strong>Base corner</strong></h4>
                <p>The corner radius is 3px</p>
              </div>
              <div className="fazz-col-3">
                <img src="/static/images/accent-with-stoke@2x.png" />
                <h4><strong>Accent with stroke</strong></h4>
                <p>Use 1 px stroke weight to make the accent</p>
              </div>
              <div className="fazz-col-3">
                <img src="/static/images/accent-with-fill@2x.png" />
                <h4><strong>Accent with fill</strong></h4>
                <p>When it had to using filled accent, make sure the counter stroke is max. 2px</p>
              </div>
            </div>
            <div className="fazz-row fazz-row-mobile-2" style={{ marginTop: '23px' }}>
              <div className="fazz-col-3">
                <img src="/static/images/shadow@2x.png" />
                <h4><strong>Shadow</strong></h4>
                <p>The shadow shape should follows the base shape of the icon. Mostly, it takes ¼ of the shape, depends on the base shape itself</p>
              </div>
            </div>
          </div>
          <p style={{ marginBottom: '40px' }}>They are using dynamic color from Fazz's brand product. If not, they must using white color in black background. Untuk warna icon bisa memakai warna dynamic brand product Fazz, atau memakai warna putih di background hitam</p>
          <div className="fazz-row fazz-row-mobile-2" style={{ marginLeft: '35px' }}>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box">
                <span className="icon-icon-black-white">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">Black White</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box">
                <span className="icon-icon-color">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">Color</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 38 38">
                    <defs>
                        <path id="a" d="M22.644 10.493c-.184 1.173-.62 1.593-1.3 1.593h-2.082l.493-3.08h2.085c.59 0 .98.334.804 1.487m-.189-3.827H17.43l-1.905 12.02-.191 1.052.988-.173L15 25l5.554-8.362-2.057.287.448-2.832c.082.049 1.627.28 2.282.317 1.425.085 3.543.233 4.127-3.585.51-3.283-1.319-4.158-2.899-4.158"/>
                        <path id="c" d="M8.334 5A3.337 3.337 0 0 0 5 8.333v15a3.337 3.337 0 0 0 3.333 3.334c.921 0 1.667.746 1.667 1.666v4.31l5.488-5.488a1.66 1.66 0 0 1 1.178-.488h15a3.337 3.337 0 0 0 3.334-3.334v-15A3.337 3.337 0 0 0 31.667 5H8.334zm0 33.333a1.667 1.667 0 0 1-1.667-1.667V29.79c-2.873-.743-5-3.357-5-6.457v-15a6.673 6.673 0 0 1 6.667-6.666h23.333a6.673 6.673 0 0 1 6.667 6.666v15A6.673 6.673 0 0 1 31.667 30h-14.31l-7.845 7.845a1.667 1.667 0 0 1-1.178.488z"/>
                        <path id="e" d="M13.334 29.31v-2.643c0-.834-.417-1.25-.833-1.459-.537-.268-.834-.863-.834-1.463V5H8.334A3.335 3.335 0 0 0 5 8.333v15a3.332 3.332 0 0 0 3.333 3.334c.921 0 1.667.746 1.667 1.666v4.31l3.333-3.333z"/>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(-1 -1)">
                            <mask id="b" fill="#fff">
                                <use xlinkHref="#a"/>
                            </mask>
                            <use fill="#26BE6B" xlinkHref="#a"/>
                            <g fill="#BA1818" mask="url(#b)">
                                <path d="M0 0h40v40H0z"/>
                            </g>
                        </g>
                        <g transform="translate(-1 -1)">
                            <mask id="d" fill="#fff">
                                <use xlinkHref="#c"/>
                            </mask>
                            <use fill="#3A8FF3" xlinkHref="#c"/>
                            <g fill="#4D4D4D" mask="url(#d)">
                                <path d="M0 0h40v40H0z"/>
                            </g>
                        </g>
                        <g transform="translate(-1 -1)">
                            <mask id="f" fill="#fff">
                                <use xlinkHref="#e"/>
                            </mask>
                            <use fill="#D3E6FC" xlinkHref="#e"/>
                            <g fill="#DFDFDF" mask="url(#f)">
                                <path d="M0 0h40v40H0z"/>
                            </g>
                        </g>
                        <path d="M-1-1h40v40H-1z"/>
                    </g>
                </svg>
              </div>
              <div className="icon-box__caption">Dynamic</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box">
                <span className="icon-icon-grey">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">Grey</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box">
                <span className="icon-icon-fill">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">Fill</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box" style={{ backgroundColor: '#333333' }}>
                <span className="icon-icon-white">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">White</div>
            </div>
          </div>
          <div className="article__tittle-menu">Icon Group</div>
          <div className="fazz-row" style={{ marginLeft: '20px' }}>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">11 Icons</span>
                <span className="icon-ic-cashback-car-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-dashboard-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-laptop-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-monthly-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-motor-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-mutationcashback-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-premium-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-smartphone-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-total-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-totaluser-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-cashback-umroh-bw-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Cashback
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">5 Icons</span>
                <span className="icon-ic-common-social-facebook-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-social-gmail-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-social-instagram-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-social-twitter-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-social-yahoo-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Social
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">11 Icons</span>
                <span className="icon-ic-common-navbot-account-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-agent-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-cashier-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-chat-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-deals-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-home-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-lakupandai-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-newsfeed-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-notification-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-scan-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-navbot-transaction-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Navbot
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">4 Icons</span>
                <span className="icon-ic-credit-balance-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>
                </span>
                <span className="icon-ic-credit-checkbill-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
                <span className="icon-ic-credit-inprocess-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"><span class="path4"></span><span class="path5"></span><span class="path6"><span class="path7"></span></span></span>
                </span>
                <span className="icon-ic-credit-mutation-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Credit
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">3 Icons</span>
                <span className="icon-ic-gold-balance-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
                <span className="icon-ic-point-balance-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span>
                </span>
                <span className="icon-ic-wallet-balance-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Balance
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">4 Icons</span>
                <span className="icon-ic-payment-copycode-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-payment-coupon-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-payment-printbluetooth-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-payment-printpdf-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Payment
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">5 Icons</span>
                <span className="icon-ic-recharge-finance-emoney-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-finance-kirimsaldo-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-finance-lendmoney-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-finance-receivesaldo-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-finance-transferdana-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Finance
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">8 Icons</span>
                <span className="icon-ic-recharge-postpaid-bpjs-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-postpaid-gasnegara-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-postpaid-multifinance-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-postpaid-pascabayarseluler-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-postpaid-pdam-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-postpaid-tagihanpln-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-postpaid-telkom-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-postpaid-tvcable-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Postpaid
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">6 Icons</span>
                <span className="icon-ic-recharge-prepaid-data-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-emas-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-emoney-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-game-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-phone-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-tokenpln-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Prepaid
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">35 Icons</span>
                <span className="icon-ic-common-action-add-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-addnote-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-backbutton-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-bad-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-good-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-record-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-refresh-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-send-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-share-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-shoppingcart-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-drag-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-edititem-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-filter-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-gallery-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-action-sort-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Action
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">21 Icons</span>
                <span className="icon-ic-user-showpassword-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-targetagent-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-unlock-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-username-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-sessionmanagement-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-referral-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-lock-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-logout-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-password-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-phone-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-hidepassword-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-editprofile-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-fingerprint-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-email-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-user-favnumber-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                User
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group fs-20">
                <span className="total-icon">45 Icons</span>
                <span className="icon-ic-common-activity-aboutpayfazz-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-attachment-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
                <span className="icon-ic-common-activity-backspace-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-calendar-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-camera-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-flash-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-fraud-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span>
                </span>
                <span className="icon-ic-common-activity-hidekeyboard-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-inbox-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span>
                </span>
                <span className="icon-ic-common-activity-info-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-paywithqr-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
                <span className="icon-ic-common-activity-pinmaps-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-pricelist-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-printer-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span class="path4"></span>
                </span>
                <span className="icon-ic-common-activity-information-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Activity
                <span className="fs-14"><strong>Download</strong></span>
              </div>
            </div>
          </div>
        </article>
      </Site>
    )
  }
}

export default Iconography