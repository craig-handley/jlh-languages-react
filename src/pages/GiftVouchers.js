import React, { Fragment } from "react";
import Navigation from './Navigation';
import gift_voucher_01 from "../img/gift_voucher_01.png";

const GiftVouchers = () => {
  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Gift Vouchers</h2>
          </header>
          <div className="image fit smaller">
            <img src={gift_voucher_01} alt="" className="with-border"></img>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default GiftVouchers;

