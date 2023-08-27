import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Header from "@/Component/Header/Header";
import Footer from "@/Component/Footer/Footer";
import Layout from "@/Layout/Layout";
import Home from "./Home/Home/Home";
import Catogery from "@/Component/Catogery/Catogery";
import TrendingTshirts from "./TrendingTshirts/TrendingTshirts";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import NewProducts from "./NewProducts/NewProducts";
import BestSellingProducts from "./BestSellingProducts/BestSellingProducts";
import AllTrendyCollections from "./AllTrendyCollections/AllTrendyCollections";
import ContactUs from "./ContactUs/ContactUs";


export default function index() {
  return (
    <React.Fragment>
        <Home/>
        <Catogery/>
        <TrendingTshirts/>
        <FeaturedProducts/>
        <NewProducts/>
<BestSellingProducts/>
<AllTrendyCollections/>
<ContactUs/>
    
    </React.Fragment>
  );
}
