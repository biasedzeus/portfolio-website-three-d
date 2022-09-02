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

export default function App() {
  return (
    <div className="App">
      <Header />

      <HomePage />
      <HeroSection />
      <div>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim
          molestiae incidunt ipsam, nostrum a? Ea architecto, vel recusandae
          laboriosam aliquam delectus repellat? Consequatur, laborum vero!
          Beatae quos dolorum rerum. Esse quam eius assumenda quo quasi, facilis
          totam ea mollitia, commodi cumque asperiores perspiciatis similique
          odio nesciunt deserunt dignissimos minus maxime accusantium a, itaque
          vel! Quas iure nisi ad ab. Expedita maiores, laborum officia totam
          optio repudiandae illum nobis eaque eos commodi qui aliquam odio
          ducimus nostrum esse ratione unde, rerum fugit beatae, ullam magnam?
          Magni officia numquam itaque minima! Earum consectetur esse provident!
          Optio asperiores dolorum, enim velit a saepe porro id alias, neque
          nesciunt nemo ex debitis, vero error? Laborum dolorem aut fugiat, eos
          iure quibusdam omnis tempore! Praesentium vitae ut quo veniam dolorem,
          iure ad iste saepe architecto voluptatum distinctio ipsum amet nisi
          tenetur eveniet beatae mollitia. Doloribus dolores fuga quam
          laboriosam soluta omnis hic perspiciatis deserunt. Illum enim sunt
          officia cumque, qui corporis error perspiciatis itaque praesentium nam
          vitae, et est molestiae aliquam, cum ipsum labore. Aliquam dignissimos
          deleniti consequuntur nobis excepturi provident. Dignissimos, porro
          quasi? Nostrum facere porro, quidem nesciunt in libero perspiciatis
          ducimus, aliquid, harum quibusdam vel culpa. Rem adipisci voluptas
          tempore voluptates ducimus optio laborum ipsa consequatur dolore
          assumenda, obcaecati debitis, magni modi? Saepe, qui! Maxime, voluptas
          numquam. Illum non laudantium magni at animi ducimus, consectetur
          nihil dicta, excepturi eveniet quas ab impedit exercitationem nostrum,
          molestias ut voluptatum quisquam quidem officiis iusto dolorem.
          Perspiciatis odio magnam beatae ipsa accusamus hic eligendi quis
          corporis animi sed et dolore distinctio nobis aliquam, consectetur
          consequatur fuga explicabo ipsum aut debitis iure dicta? Vel eum
          veritatis ut! Cumque dolore nostrum voluptate quaerat molestias illum
          voluptatem dolorum deserunt delectus expedita, laborum soluta
          aspernatur maxime repellat labore, est modi minima sunt veritatis
          velit non consequuntur fugit. Sapiente, quaerat cum! Temporibus
          tempore, eum delectus maiores totam quis, ea provident repudiandae
          deserunt dolores reiciendis adipisci nam? Architecto inventore debitis
          recusandae nam doloribus minus quia eveniet eligendi, blanditiis est,
          voluptate maiores voluptas? Officia officiis maiores provident? Cumque
          fugiat atque voluptatum veritatis animi facilis sequi dolorem? Sint
          dolorem quaerat iure eos animi nesciunt asperiores quibusdam nam quod
          laborum! Accusantium, voluptates maxime. Labore, a. Illo qui accusamus
          quaerat quo nobis! Non maiores omnis quod praesentium voluptatibus
          obcaecati beatae accusantium quo nesciunt? Ad molestiae ut architecto
          aperiam non obcaecati corrupti soluta magnam velit magni! Voluptas?
          Atque fuga harum fugit delectus deserunt temporibus libero est ut
          molestiae consectetur soluta voluptate minus facere, repellat sequi
          perspiciatis voluptas architecto excepturi dicta numquam! Id
          asperiores ipsa voluptate. Consequatur, eius! Soluta, consequatur
          earum quidem, possimus voluptatem id quibusdam mollitia est delectus
          vero sed quisquam a quod. Corporis at dolorem repellat impedit libero,
          vero reprehenderit provident, aliquam beatae enim soluta cumque. Optio
          ipsa beatae a quisquam, tempore tenetur quam exercitationem neque eum
          et sequi rem, eos possimus quasi facere commodi natus perferendis,
          repudiandae vero laborum expedita laboriosam quae dignissimos soluta.
          Id! Officiis, possimus quaerat. Illo id error et tenetur illum soluta
          deserunt officia debitis, dolore consectetur rerum suscipit nobis sit
          delectus alias asperiores modi temporibus harum aperiam eos aut
          praesentium sint! Vero asperiores cupiditate ad, molestias nihil
          tempore qui labore suscipit libero maiores explicabo sed temporibus
          porro unde quidem officia voluptate nulla voluptatem nesciunt a?
          Cupiditate quidem similique sunt earum inventore. Recusandae, sit
          dolorem! Labore autem sunt culpa, recusandae explicabo dolor dolorum
          sequi suscipit earum natus rerum accusantium, nobis porro obcaecati?
          Praesentium ipsa facere tempora unde quam dolorum optio, animi beatae.
          Quia sit asperiores dolorem minus obcaecati dolores nesciunt
          voluptatibus consequuntur laudantium perferendis eos ad, esse nemo
          numquam modi quo expedita possimus saepe nulla aliquid animi. Quo rem
          excepturi aliquid enim. Earum soluta eum aliquam quasi temporibus vel
          odio non aperiam ex voluptas porro molestias, laboriosam atque dolorum
          ipsam accusamus officiis itaque reprehenderit, ipsum, quod nulla! Non
          nulla beatae maiores voluptatibus! Fugit quo provident modi quia
          necessitatibus magnam nesciunt quis sunt architecto odio error,
          exercitationem placeat veniam natus cum pariatur eius reprehenderit
          rem harum labore non, molestias sint enim vero. Earum! Ea quaerat
          optio nostrum nihil iure eius porro qui itaque aliquid dolore, magnam
          voluptate sint unde ad odio quisquam dignissimos voluptatem assumenda
          vel tempora sit. Reprehenderit iure ipsum et quod.
        </p> */}
      </div>
    </div>
  );
}
