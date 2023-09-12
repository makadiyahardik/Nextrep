import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";

import Home from "./Home/Home/Home";
import Header from "@/components/Header/Header";


export default function index() {
  return (
    <React.Fragment>
      <Header/>
        <Home/>
   
    
    </React.Fragment>
  );
}
