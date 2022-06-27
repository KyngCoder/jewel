import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import FooterOverlay from "./FooterOverlay";
import Newsletter from "./Newsletter";

const Footer = () => (
  <div
    className="w-screen relative z-10 flex justify-start items-center flex-col black pt-0 "
    id="login"
  >
    <FooterOverlay />
    <Newsletter />

    <div className="w-screen mt-20 text-white px-8 block md:flex items-center justify-center ">
      <div className="m-4 flex justify-start items-center flex-col ">
        <h1>Contact Us</h1>
        <p>Rose Hall Montego Bay,</p>
        <p>St.James, Jamaica</p>
        <p>+1 876-777-7287</p>
        <p>+1 876-895-9388</p>
      </div>
      

      <div className="flex-1 m-4 text-center">
        <h1>Love Jewellery</h1>
        <p>
          &quot;You're never fully dressed without Jewellery.&quot;
        </p>
        <img src="" className="mt-4 w-52 mb-3" />
        <div className="mt-2 cursor-pointer flex justify-center">
          <FiFacebook className="mx-2" />
          <FiTwitter className="mx-2" />
          <FiInstagram className="mx-2" />
        </div>
      </div>

      <div className="m-4 flex justify-center items-center flex-col">
        <h1>Working Hours</h1>
        <p>Monday-Friday:</p>
        <p>08:00 am - 12:00 am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="text-white mb-4">
      <p>2022 Love Jewellery. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
