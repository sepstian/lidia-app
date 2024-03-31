import { Box, Text } from "@chakra-ui/react"
import "./Review.css"
import React from "react"
import BoxReview from "../../components/BoxReview/BoxReview";
import fprofile from "../../assets/logo/logo-profile.jpg"
import fprofile1 from "../../assets/logo/logo-profile1.jpg"
import fprofile2 from "../../assets/logo/logo-profile2.jpg"


const Review = () => {
    const[feature, setFeature] = React.useState([
        {
            id:1,
            fprofile: fprofile,
            nama:"John Wick",
            posisi:"College Student",
            comment: "Engaging plot, vivid characters; a captivating read that lingers in your thoughts.",
            link:"#"
        },
        {
            id:2,
            fprofile: fprofile1,
            nama:"Johnson Wilona",
            posisi:"School Student",
            comment: "Thought-provoking narrative and rich prose. A must-read for any avid book lover!",
            link:"#"
        },
        {
            id:3,
            fprofile: fprofile2,
            nama:"Anderson Jacky",
            posisi:"ERP Developer",
            comment: "Immersive storytelling! An enriching literary experience worth savoring and sharing.",
            link:"#"
        },
    ])

    return(
        <>  
            <Box style={{ display:"flex", width:"100%", height:"100vh", justifyContent:"center", alignItems:"center", marginTop:""}}>
                <Box style={{ display:"flex", width:"85%", height:"70%", justifyContent:"space-between", flexDirection:"column"}}>
                    <Box>
                        <Text className="judul_page">REVIEW</Text>
                        <Text className="txt_judul">💬• Reviews of Others</Text>
                    </Box>
                    <Box style={{ display: "flex", width:"100%", height:"80%",  justifyContent:"space-between", alignItems:"center"}}>
                        {feature.map((val, idx) =>{
                            return(
                                <BoxReview toLink={val.link} profile={val.fprofile} name={val.nama} job={val.posisi}>
                                    {val.comment}
                                </BoxReview>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Review