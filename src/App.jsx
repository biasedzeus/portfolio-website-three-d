import { useState, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import "./App.scss";
import Header from "./components/Header";
import HomePage from "./components//HomePage";

import { Html, RoundedBox, useGLTF } from "@react-three/drei";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import HomePage_test from "./components/HomePage_test";
import FlexLayout from "./components/FlexLayout";
import Blob from "./components/Blob";
import { Container, Stack } from "@mui/material";
import HeroSection from "./components/HeroSection";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/joy";
import Portfolio from "./components/Portfolio";
import toast,{Toaster} from 'react-hot-toast';
import { useEffect } from "react";

export default function App() {
  
  useEffect(() =>{
    toast.success("Drag Spheres to move them",{
      duration:10000,
      position: "bottom-center",
      style:{
        backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius:'2rem'
  
      },
      icon:'🖱️'
    })
  
   },[])

  const { ref, inView } = useInView({
    threshold: .9
  });
  
  console.log("inView",inView);

  return (
    <div className="App">
      <Header  inView={inView}/>
       <Box sx={{height:'100vh', width: '100vw'}}>
      <HomePage />
       </Box>
      <HeroSection intersecRef={ref} />
      <Box sx={{maxWidth:'90%'}}>
       <Portfolio/>
       <Footer/>
      </Box>
      <Toaster/>
    </div>
  );
}
