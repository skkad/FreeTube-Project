import React from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar,Feed ,VideoDetails,ChannelDetails,SearchFeed} from './Components/index'

export default function App(){
    return(
        <BrowserRouter>
            <Box sx={{backgroundColor: "#000"}}>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Feed/>} />
                    <Route path="/video/:id" element={<VideoDetails/>} />
                    <Route path="/channel/:id" element={<ChannelDetails/>} />
                    <Route path="/search/:searchTerm" element={<SearchFeed/>} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}