import { Box, Button, Image, Text } from "@chakra-ui/react"
import Header from "../components/Header/Header"
import LogoContentIndex from "../assets/logo/logo-content-index.png"
import "./index.css"
import Feature from "./Feature/Feature"
import Service from "./Service/Service"
import Review from "./Review/Review"
import Location from "./Location/Location"

const LandingPage = () => {

    return(
        <>  
        <div style={{ display:"flex", flexDirection:"column", gap:"0px" }}>
            <Header/>
            <Box style={{ display:"flex", position:"relative", width:"100%", top:"4.4rem", height:"83vh", zIndex:"-1", justifyContent:"center"}}>
                <Box style={{ display:"flex", width:"90%", justifyContent:"space-between"}}>
                    <Box style={{ display:"flex", position:"relative", width:"40%", height:"auto", justifyContent:"space-evenly", alignItems:"", flexDirection:"column", zIndex:"4", marginTop:"6px"}}>
                        <Text className="txt_search" style={{ position:"relative", width:"120%", right:"-8%", fontSize:"4.3rem", fontWeight:"900"}}>
                            Search & review your <span style={{ color:"blue", borderBottom:"3px solid blue"}}>fav book</span> effortlessly
                        </Text>
                        <Text style={{ display:"flex", position:"relative", width:"100%", right:"-8%"}}>
                            Embark on a literary journey like never before with our revolutionary 
                            library application! Introducing a seamless experience 
                            that transcends traditional boundaries, where  you 
                            can effortlessly search your favorite books.✨
                        </Text>
                        <Button className="txt_start_btn" style={{ display:"flex", position:"relative", width:"30%", right:"-8%", fontSize:"14px", justifyContent:"center", alignItems:"center", zIndex:"999"}} colorScheme='blue'>Start now →</Button>
                    </Box>
                    <Image style={{ display:"flex", position:"relative", marginBottom:"10px", top:"-6.4rem", width:"53%", right:"-5.55%", height:"122%", zIndex:"3"}} cursor={"pointer"} boxSize="auto" objectFit="cover" src={LogoContentIndex}/>
                </Box>
            </Box>
            <Feature/>
            <Service/>
            <Review/>
            <Location/>
        </div>
        </>
    )
}

export default LandingPage