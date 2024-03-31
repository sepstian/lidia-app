import { Box, Text } from "@chakra-ui/react"
import "./BoxFeature.css"

const BoxFeature = (props) => {

    return(
        <>
            <Box style={{ display:"flex", width:"25%", height:"80%", justifyContent:"space-between", alignItems:"center", flexDirection:"column"}}>
                <Box className="box_feature" onClick={props.toLink} backgroundColor="blue" _hover={{ backgroundColor:"rgb(9, 9, 128)" }} style={{ display:"flex", width:"5rem", height:"5rem", justifyContent:"center", alignItems:"center", fontSize:"2rem", borderRadius:"26px", color:"white", fontWeight:"800", boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", cursor:"pointer"}}>
                    {props.icon}
                </Box>
                <Text className="txt_judul" style={{ width:"auto", fontWeight:"600", fontSize:"1.5rem"}}>{props.judul}</Text>
                <Text className="txt_content" style={{ width:"76%", textAlign:"center"}}>{props.children}</Text>
            </Box>
        </>
    )
}

export default BoxFeature