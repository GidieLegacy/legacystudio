import { useParams } from 'react-router-dom';
import {Box, Text} from "@chakra-ui/react";
import Services from "./Services";
import {useEffect, useState} from "react";
import {services} from "../misc/services";
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";

function SingleServicePage({title, subTitle, description, technologies, techImage, tooltip}) {
   /* const { id } = useParams();
    const [postTitle, setPostTitle] = useState("");
    const [services, setServices] = useState([]);
    const [data, loading, error] = useCollection(db.collection("services"));

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

    //fetch services from firebase
     useEffect(() => {
        if (data) {
            const fetchedServices = data.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
            setServices(fetchedServices);
        }
     }, [data]);*/

    return (
        <>
            {/*{loading && <Text>Loading...</Text>}
            {error && <Text>{error.message}</Text>}*/}
            <Box>
                {services.map((service) => {
                    return (
                        <Box key={service.id}>
                            <Text>{service.title}</Text>
                            <Text>{service.subTitle}</Text>
                            <Text>{service.description}</Text>
                            <Text>{service.technologies}</Text>
                            <Text>{service.techImage}</Text>
                            <Text>{service.tooltip}</Text>
                        </Box>
                    )
                })
                }
            </Box>
        </>

    );
}

export default SingleServicePage;
