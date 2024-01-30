import React from 'react';
import {Box, Input, List, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import HeroSection from "../misc/heroSection";
import RussianTraining from "../utils/RussianTraining";
import RussianExam from "../utils/RussianExam";
import image1 from "../assets/toloka/training/IMG-20231007-WA0017.jpg";
import image2 from "../assets/toloka/training/IMG-20231007-WA0018.jpg";
import image3 from "../assets/toloka/training/IMG-20231007-WA0019.jpg";
import image4 from "../assets/toloka/training/IMG-20231007-WA0020.jpg";
import image5 from "../assets/toloka/training/IMG-20231007-WA0021.jpg";
import image6 from "../assets/toloka/training/IMG-20231007-WA0022.jpg";
import image7 from "../assets/toloka/training/IMG-20231007-WA0023.jpg";
import image8 from "../assets/toloka/training/IMG-20231007-WA0024.jpg";
import image9 from "../assets/toloka/training/IMG-20231007-WA0025.jpg";
import image10 from "../assets/toloka/training/IMG-20231007-WA0026.jpg";
import image11 from "../assets/toloka/training/IMG-20231007-WA0027.jpg";
import image12 from "../assets/toloka/training/IMG-20231007-WA0028.jpg";
import image13 from "../assets/toloka/training/IMG-20231007-WA0029.jpg";
import image14 from "../assets/toloka/training/IMG-20231007-WA0030.jpg";
import image15 from "../assets/toloka/training/IMG-20231007-WA0031.jpg";
import image16 from "../assets/toloka/training/IMG-20231007-WA0032.jpg";
import image17 from "../assets/toloka/training/IMG-20231007-WA0033.jpg";
import image18 from "../assets/toloka/training/IMG-20231007-WA0034.jpg";
import image19 from "../assets/toloka/training/IMG-20231007-WA0035.jpg";
import image20 from "../assets/toloka/training/IMG-20231007-WA0036.jpg";
import image21 from "../assets/toloka/training/IMG-20231007-WA0037.jpg";
import image22 from "../assets/toloka/training/IMG-20231007-WA0038.jpg";
import image23 from "../assets/toloka/training/IMG-20231007-WA0039.jpg";
import image24 from "../assets/toloka/training/IMG-20231007-WA0040.jpg";
import image25 from "../assets/toloka/training/IMG-20231007-WA0041.jpg";
import image26 from "../assets/toloka/training/IMG-20231007-WA0042.jpg";
import image27 from "../assets/toloka/training/IMG-20231007-WA0043.jpg";
import image28 from "../assets/toloka/training/IMG-20231007-WA0044.jpg";
import image29 from "../assets/toloka/training/IMG-20231007-WA0045.jpg";
import image30 from "../assets/toloka/training/IMG-20231007-WA0046.jpg";
import image31 from "../assets/toloka/training/IMG-20231007-WA0047.jpg";
import Gallery from "../utils/gallery/Gallery";
import Audio from "../utils/arabic/Audio";

const Toloka = () => {

    const trainingImages = [
       image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
        image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
        image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
        image31
    ];

    return (
        <Box mt={-110}>
            <Box>
                <HeroSection title={"Toloka"} subtitle={"start tasking"} />
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Tabs colorScheme="teal" width={"100%"} alignItems={"center"} justifyContent={"center"}>
                        <TabList>
                            <Tab>ARABIC Audio $0.10</Tab>
                            <Tab>Russian $0.05</Tab>
                            <Tab>Is the ad relevant?</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>

                                <Audio/>

                                <List mt={4}>

                                </List>
                            </TabPanel>

                            <TabPanel>
                                <Tabs variant="enclosed-colored" colorScheme={"teal"}>
                                    <TabList>
                                        <Tab>Training</Tab>
                                        <Tab>Exam</Tab>
                                    </TabList>

                                    <TabPanels>
                                        <TabPanel>
                                            <RussianTraining />
                                        </TabPanel>
                                        <TabPanel>
                                            <RussianExam/>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </TabPanel>

                            <TabPanel>
                                <Tabs variant="enclosed-colored" colorScheme={"teal"}>
                                    <TabList>
                                        <Tab>Training</Tab>
                                        <Tab>Exam 1</Tab>
                                        <Tab>Exam 2</Tab>
                                    </TabList>

                                    <TabPanels bg={"blue.50"}>
                                        <TabPanel >
                                            {/*training gallery*/}
                                            <Gallery images={trainingImages} />
                                        </TabPanel>
                                        <TabPanel>
                                            {/*Exam 1 gallery*/}
                                        </TabPanel>
                                        <TabPanel>
                                            {/*Exam 2 gallery*/}
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>


            </Box>


        </Box>
    );
};

export default Toloka;
