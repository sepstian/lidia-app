import { Box, Image, Text } from "@chakra-ui/react"
import "./Service.css"
import React from "react"
import LogoRentService from "../../assets/logo/logo-rent-service.png"
import LogoRentService2 from "../../assets/logo/logo-quickbook-service.png"

const Service = () => {

    return(
        <>  
            <Box style={{ display:"flex", width:"100%", height:"130vh", justifyContent:"center", alignItems:"center", backgroundColor:""}}>
                <Box style={{ display:"flex", width:"85%", height:"100%", justifyContent:"space-between", flexDirection:"column"}}>
                    <Box>
                        <Text className="judul_page">SERVICES</Text>
                        <Text className="txt_judul">🚀• The Services for You</Text>
                    </Box>
                    <Box style={{ display: "flex", width:"100%", height:"40%",  justifyContent:"space-between", alignItems:"center" }}>
                        <Image style={{ display:"flex", width:"34rem", height:"auto" }} objectFit="cover" src={LogoRentService}/>
                        <Box style={{ display:"flex", width:"32rem", height:"100%", flexDirection:"column", justifyContent:"space-between"}}>
                            <Text className="txt_judul_content">
                                <span style={{ color:"blue", cursor:"pointer" }}>Rent</span> your favorite book 
                                fairly easy on <span style={{ color:"blue", cursor:"pointer" }}>Lidia</span>!
                            </Text>
                            <Box style={{display:"flex", height:"60%", gap:"20px", flexDirection:"column"}}>
                                <Text className="txt_content">
                                    Viewing, rent, and organize your favorite books has
                                    never been easier. An integrated digital library rent 
                                    that’s simple to use, Lidia lets you spend less time 
                                    managing your work and more time actually doing it!
                                </Text>
                                <Text className="txt_content">
                                    Effortless rentals, personalized shelves—Lidia 
                                    transforms book management, enhancing your 
                                    reading experience~
                                </Text>

                            </Box>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width:"100%", height:"40%",  justifyContent:"space-between", alignItems:"center" }}>
                        <Box style={{ display:"flex", width:"32rem", height:"100%", flexDirection:"column", justifyContent:"space-between"}}>
                            <Text className="txt_judul_content">
                                Quick Book Rentals: 
                                <span style={{ color:"blue", cursor:"pointer" }}>Dive</span> into <span style={{ color:"blue", cursor:"pointer" }}>Reading</span> Instantly
                            </Text>
                            <Box style={{display:"flex", height:"60%", gap:"20px", flexDirection:"column"}}>
                                <Text className="txt_content">
                                    Discover instant literary delight. Access a vast library,
                                    borrow your favorite reads, and dive into captivating
                                    stories within minutes. Reading made quick and easy,
                                    just a click away!
                                </Text>
                                <Text className="txt_content">
                                    Unlock a world of stories effortlessly. 
                                    Browse genres, choose, rent in minutes. 
                                    Seamlessly manage your reading adventures 
                                    with our intuitive platform~
                                </Text>

                            </Box>
                        </Box>
                        <Image style={{ display:"flex", width:"34rem", height:"auto" }} objectFit="cover" src={LogoRentService2}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Service