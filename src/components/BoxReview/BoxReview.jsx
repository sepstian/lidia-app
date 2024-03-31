import { Box, Text } from "@chakra-ui/react"
import "./BoxReview.css"
import profile1 from "../../assets/logo/logo-profile.jpg"

const BoxReview = (props) => {

    return(
        <>
            <Box style={{ display:"flex", width:"25%", height:"90%", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column", backgroundColor:"white", boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
                <Box bgImage={props.profile} backgroundSize="cover" className="box_feature" onClick={props.toLink} backgroundColor="blue" _hover={{ filter:"brightness(60%)" }} style={{ display:"flex", width:"7rem", height:"7rem", justifyContent:"center", alignItems:"center", fontSize:"2rem", borderRadius:"100px", color:"white", fontWeight:"800", boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", cursor:"pointer"}}/>
                <Text className="txt_comment" style={{ width:"86%", textAlign:"center"}}>{props.children}</Text>
                <Text className="txt_name" style={{ width:"auto", textAlign:"center"}}>{props.name}</Text>
                <Text className="txt_job" style={{ width:"auto", textAlign:"center"}}>{props.job}</Text>
            </Box>
        </>
    )
}

export default BoxReview