import { useParams } from 'react-router-dom';
import {Box, Text} from "@chakra-ui/react";
import Services from "./Services";
import {useEffect, useState} from "react";
import {services} from "../misc/services";

function SingleServicePage({title, subTitle, description, technologies, techImage, tooltip}) {
    const { id } = useParams();
    const [postTitle, setPostTitle] = useState("");

    //convert id to number
    const idNumber = parseInt(id);


    useEffect(() => {
        services.forEach((service) => {
            if (service.id === idNumber) {
                setPostTitle(service.title);

                console.log(service);
            }
        });
    }, [idNumber]);

    return (
        <Box>
            <Text>You are viewing data for: {id} and {postTitle}</Text>
        </Box>
    );
}

export default SingleServicePage;
