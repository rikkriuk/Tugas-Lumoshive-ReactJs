import React, { useState } from "react";
import ListItem from "../components/ListItem";
import { siaranPers, behindTheScene, socialImpact } from "../utils/data";

const ListContainer = () => {
   const [siaranPersData, setSiaranPersData] = useState(siaranPers);
   const [behindTheSceneData, setBehindTheSceneData] = useState(behindTheScene);
   const [socialImpactData, setSocialImpactData] = useState(socialImpact);
   
   return (
      <>
         <ListItem name={"Siaran Pers"} data={siaranPersData} setData={setSiaranPersData} />
         <ListItem name={"Behind The Scene"} data={behindTheSceneData} setData={setBehindTheSceneData} />
         <ListItem name={"Social Impact"} data={socialImpactData} setData={setSocialImpactData} />
      </>
   )
}

export default ListContainer;