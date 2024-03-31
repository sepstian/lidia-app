import { Box, Image, Button, Text } from "@chakra-ui/react"
import LogoLidia from "../../assets/logo/logo-lidia.png";

const Header = () => {

    return(
        <>
            <Box style={{display:"flex", position:"relative", top:"4rem", justifyContent:"center", alignItems:"center", width:"auto", height:"2rem"}}>
                <Box style={{ display:"flex", justifyContent:"space-between", alignItems:"center", width:"85%", height:"70%" }}>
                    <Box style={{ display:"flex", width:"45%", justifyContent:"space-between"}}>
                        <Box style={{ display:"flex", justifyContent:"center",alignItems:"center", gap:"5px", cursor:"pointer"}}>
                            <Image boxSize="auto" width="auto" height="32px" objectFit="cover" src={LogoLidia}/>
                            <Text style={{ display:"flex", fontSize:"20px", fontWeight:"600"}}>Lidia</Text>
                        </Box>
                        <Box style={{ display:"flex", width:"60%", justifyContent:"space-between", alignItems:"center", color:"grey", fontWeight:"400"}}>
                            <Text className="txt-nav" style={{ display:"flex", cursor:"pointer" }}>Feature</Text>
                            <Text className="txt-nav" style={{ display:"flex", cursor:"pointer" }}>Service</Text>
                            <Text className="txt-nav" style={{ display:"flex", cursor:"pointer" }}>Review</Text>
                            <Text className="txt-nav" style={{ display:"flex", cursor:"pointer" }}>Location</Text>
                        </Box>
                    </Box>
                    <Button style={{ display:"flex", width:"10%", backgroundColor:"white", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                        Login
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Header