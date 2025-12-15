"use client";
import Image from "next/image";

import React from 'react'
import LogoIcons from "../../../../public/images/logo-center.png";

const ChatSupportHead = () => {
  return (
    <div className="chat-head-support">
        <div className="support-box d-flex align-items-center gap-2">
            <div className="logo-box">
                 <Image src={LogoIcons} alt="" />
            </div>
            <div className="text-box">
                <h3>Squch Support</h3>
                <p className="m-0">#SQH1234567890</p>
            </div>
        </div>
    </div>
  )
}

export default ChatSupportHead