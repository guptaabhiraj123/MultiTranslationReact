import React from "react"
import Languageoption from '../component/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import Navbar from "../component/Navbar"
const Home = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div style={{marginTop:'50px'}} className="container">
            <Navbar/>
            <Languageoption onChange={(e)=> handleClick(e)}/>
            <h1>{t('welcome')} {t('home')}</h1>
            </div>
        
    )
}
export default Home