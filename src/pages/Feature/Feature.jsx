import { Box, Text } from "@chakra-ui/react"
import "./Feature.css"
import BoxFeature from "../../components/BoxFeature/BoxFeature"
import React from "react"
import { FiSearch } from "react-icons/fi";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

const Feature = () => {
    const[feature, setFeature] = React.useState([
        {
            id:1,
            icon: <FiSearch/>,
            judul:"Search Book",
            keterangan: "Effortlessly find your next read with our powerful and intuitive book search.",
            link:"#"
        },
        {
            id:2,
            icon: <FaRegComment />,
            judul:"Review book",
            keterangan: "Discover insightful critiques and share your thoughts on diverse literary masterpieces effortlessly.",
            link:"#"
        },
        {
            id:3,
            icon: <FaRegHeart />,
            judul:"Wishlist book",
            keterangan: "Curate your literary dreams–wishlist books  for future adventures and discoveries.",
            link:"#"
        },
    ])

    return(
        <>  
            <Box style={{ display:"flex", width:"100%", height:"100vh", justifyContent:"center", alignItems:"center", marginTop:"6%"}}>
                <Box style={{ display:"flex", width:"85%", height:"70%", justifyContent:"space-between", flexDirection:"column"}}>
                    <Box>
                        <Text className="judul_page">FEATURES</Text>
                        <Text className="txt_judul">🤔• What You Can Do?</Text>
                    </Box>
                    <Box style={{ display: "flex", width:"100%", height:"80%",  justifyContent:"space-between", alignItems:"center"}}>
                        {feature.map((val, idx) =>{
                            return(
                                <BoxFeature toLink={val.link} judul={val.judul} icon={val.icon}>{val.keterangan}</BoxFeature>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Feature