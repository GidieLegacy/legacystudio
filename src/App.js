import {Box, ChakraProvider, Flex, Text} from "@chakra-ui/react";
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";

import Services from "./components/Services";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import SingleService from "./components/SingleService";
import Blogs from "./components/Blogs";
import SingleBlogs from "./components/SingleBlogs";
import NewBlog from "./components/NewBlog";
import CaseStudies from "./components/CaseStudies";
import Quote from "./components/Quote";
import Toloka from "./components/Toloka";
import Admin from "./components/Admin";
import NewService from "./components/NewService";
import PendoManagement from "./components/PendoManagement";
import ManageProjects from "./components/ManageProjects";


function App() {
  return (
    <ChakraProvider>

        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news-and-blogs" element={<Blogs />} />
            <Route path="/news-and-blogs/:id" element={<SingleBlogs />} />
            <Route path="/news-and-blogs/create" element={<NewBlog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pendo-bakery-management-system" element={<PendoManagement />} />
            <Route path="/projects/:id" element={<SingleService />} />
            <Route path="/projects" element={<PendoManagement />} />
            <Route path="/services/:id" element={<SingleService />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/quote" element={<Quote/>} />
            <Route path="/toloka" element={<Toloka/>} />
            <Route path="/manage-projects" element={<ManageProjects/>} />
            <Route path="/dashboard" element={<Admin/>} />
            <Route path="/new-service" element={<NewService/>} />
            <Route path={"/case-studies/:id"} element={<CaseStudies/>} />
        </Routes>

        <Footer/>
    </ChakraProvider>
  );
}

export default App;
