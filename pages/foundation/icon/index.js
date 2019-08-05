import React, { Component } from 'react'
import Site from '../../../components/layouts/site'

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

          <div className="icon-structure-section">
            <img src="/static/images/icon/size-icon@2x.png" className="article__img" />
            <div className="fazz-row">
              <div className="fazz-col-3 icon-structure">
                <img src="/static/images/icon/base-stroke@2x.png" className="icon-structure__img" />
                <h4><strong>Base stroke</strong></h4>
                <p>The stroke weight is 2px</p>
              </div>
              <div className="fazz-col-3 icon-structure">
                <img src="/static/images/icon/base-corner@2x.png" className="icon-structure__img" />
                <h4><strong>Base corner</strong></h4>
                <p>The corner radius is 3px</p>
              </div>
              <div className="fazz-col-3 icon-structure">
                <img src="/static/images/icon/accent-with-stoke@2x.png" className="icon-structure__img" />
                <h4><strong>Accent with stroke</strong></h4>
                <p>Use 1 px stroke weight to make the accent</p>
              </div>
              <div className="fazz-col-3 icon-structure">
                <img src="/static/images/icon/accent-with-fill@2x.png" className="icon-structure__img" />
                <h4><strong>Accent with fill</strong></h4>
                <p>When it had to using filled accent, make sure the counter stroke is max. 2px</p>
              </div>
            </div>
            <div className="fazz-row">
              <div className="fazz-col-3 icon-structure">
                <img src="/static/images/icon/shadow@2x.png" className="icon-structure__img" />
                <h4><strong>Shadow</strong></h4>
                <p>The shadow shape should follows the base shape of the icon. Mostly, it takes ¼ of the shape, depends on the base shape itself</p>
              </div>
            </div>
          </div>
          <p>They are using dynamic color from Fazz's brand product. If not, they must using white color in black background. Untuk warna icon bisa memakai warna dynamic brand product Fazz, atau memakai warna putih di background hitam</p>
          <div className="fazz-row fazz-row-mobile-2 indent-40 no-margin-mobile">
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box">
                <span className="icon-icon-black-white">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">Black White</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box icon-box--not-first icon-box--not-first-m">
                <span className="icon-icon-color">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">Color</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box icon-box--not-first">
                <img src="/static/images/icon/icon-dynamic.svg" />
              </div>
              <div className="icon-box__caption">Dynamic</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box icon-box--not-first-m">
                <span className="icon-icon-grey">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">Grey</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box icon-box--not-first">
                <span className="icon-icon-fill">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">Fill</div>
            </div>
            <div className="fazz-col-4 no-padding text-center">
              <div className="icon-box icon-box--not-first icon-box--not-first-m" style={{ backgroundColor: '#333333' }}>
                <span className="icon-icon-white">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-box__caption">White</div>
            </div>
          </div>
          <div className="article__title-menu">Icon Group</div>
          <div className="fazz-row fazz-row-laptop-2 icon-groups">
            <div className="fazz-col-4">
              <div className="icon-group">
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
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
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
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
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
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
                <span className="total-icon">4 Icons</span>
                <span className="icon-ic-credit-balance-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"><span className="path4"></span><span className="path5"></span><span className="path6"></span></span>
                </span>
                <span className="icon-ic-credit-checkbill-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span>
                </span>
                <span className="icon-ic-credit-inprocess-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"><span className="path4"></span><span className="path5"></span><span className="path6"><span className="path7"></span></span></span>
                </span>
                <span className="icon-ic-credit-mutation-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Credit
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
                <span className="total-icon">3 Icons</span>
                <span className="icon-ic-gold-balance-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span>
                </span>
                <span className="icon-ic-point-balance-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
                </span>
                <span className="icon-ic-wallet-balance-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Balance
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
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
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
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
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Finance
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
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
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Postpaid
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
                <span className="total-icon">6 Icons</span>
                <span className="icon-ic-recharge-prepaid-data-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-emas-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-emoney-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-game-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-phone-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span>
                </span>
                <span className="icon-ic-recharge-prepaid-tokenpln-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Prepaid
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
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
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
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
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="icon-group">
                <span className="total-icon">45 Icons</span>
                <span className="icon-ic-common-activity-aboutpayfazz-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-attachment-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span>
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
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span>
                </span>
                <span className="icon-ic-common-activity-hidekeyboard-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-inbox-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
                </span>
                <span className="icon-ic-common-activity-info-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-paywithqr-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span>
                </span>
                <span className="icon-ic-common-activity-pinmaps-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-pricelist-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
                <span className="icon-ic-common-activity-printer-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
                </span>
                <span className="icon-ic-common-activity-information-bw">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span>
                </span>
              </div>
              <div className="icon-group-title-box fs-12">
                Activity
                <a href="#" className="fs-14" download><strong>Download</strong></a>
              </div>
            </div>
          </div>
        </article>
      </Site>
    )
  }
}

export default Iconography