import { useEffect, useState } from 'react'
import HeaderSection from "../Components/HeaderSection"
import CategoriesSectiom from "../Components/CategoriesSection"




export default function Home() {
    const [loader, setLoader] = useState(true)
  
    return (
        <>
            <HeaderSection />
            <CategoriesSectiom />

        </>
    )
}
