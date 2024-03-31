import { Box, Text } from "@chakra-ui/react"
import "./Location.css"
import React from "react"

const Location = () => {

    return(
        <>  
            <Box style={{ display:"flex", width:"100%", height:"100vh", justifyContent:"center", alignItems:"center", marginTop:"6%"}}>
                <Box style={{ display:"flex", width:"85%", height:"70%", justifyContent:"space-between", flexDirection:"column"}}>
                    <Box>
                        <Text className="judul_page">LOCATION</Text>
                        <Text className="txt_judul">🗺• Our Library Location</Text>
                    </Box>
                    <Box style={{ display: "flex", width:"100%", height:"80%",  justifyContent:"space-between", alignItems:"center", backgroundColor:"red"}}>
                        t
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Location