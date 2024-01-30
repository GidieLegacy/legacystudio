import React, { useState } from 'react';
import { Box, Heading, Text, SimpleGrid, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, Input, Checkbox, Textarea, Stack, Image, Select } from "@chakra-ui/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, storage } from "../firebase";

const ManageProjects = () => {
    const [data, loading, error] = useCollection(db.collection("services"));
    const [selectedService, setSelectedService] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [thumbnailURL, setThumbnailURL] = useState("");

    const handleEdit = (service) => {
        setSelectedService(service);
        setIsEditing(true);
        setThumbnailURL(service.thumbnailURL || ""); // Set the current thumbnail URL
    };

    const handleSave = async () => {
        try {
            // Upload the thumbnail if a new file is selected
            if (thumbnailFile) {
                const thumbnailRef = storage.ref(`thumbnails/${Date.now()}-${thumbnailFile.name}`);
                await thumbnailRef.put(thumbnailFile);
                const thumbnailURL = await thumbnailRef.getDownloadURL();
                setThumbnailURL(thumbnailURL);
            }

            // Perform save logic here (update the document in the Firestore collection)
            await db.collection("services").doc(selectedService.id).update({
                ...selectedService,
                thumbnailURL: thumbnailURL,
            });

            setIsEditing(false);
        } catch (error) {
            console.error("Error saving data:", error.message);
            // Handle error appropriately
        }
    };

    const handleDelete = async () => {
        try {
            console.log(selectedService)
            // Perform delete logic here (delete the document in the Firestore collection)
            await db.collection("services").doc(selectedService.id).delete();
            setIsEditing(false);
        } catch (error) {
            console.error("Error deleting data:", error.message);
        }
    };

    const handleClose = () => {
        setSelectedService(null);
        setIsEditing(false);
        setThumbnailFile(null); // Reset the selected thumbnail file
        setThumbnailURL(""); // Reset thumbnail URL when closing modal
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setThumbnailFile(file);
    };

    return (
        <Box>
            {/* Header */}
            <Box h={110} bg={"blackAlpha.700"} />

            {/* Content */}
            <Box p={8}>
                <Heading mb={4}>Manage Projects</Heading>

                {loading && <Text>Loading...</Text>}
                {error && <Text color="red.500">Error: {error.message}</Text>}

                {data && (
                    <SimpleGrid columns={[1, 2]} spacing={4}>
                        {data.docs.map((doc) => (
                            <Box key={doc.id} p={4} borderWidth="1px" borderRadius="md" bg="white">
                                <Heading fontSize="xl">{doc.data().title}</Heading>
                                <Text mt={2}>{doc.data().description}</Text>
                                <Text mt={2}>Project Year: {doc.data().projectYear}</Text>

                                {/* Edit Button */}
                                <Stack direction="row" spacing={4} mt={4}>
                                    <Button colorScheme="teal" onClick={() => handleEdit({ ...doc.data(), id: doc.id })}>
                                        Edit/Delete
                                    </Button>

                                </Stack>
                            </Box>
                        ))}
                    </SimpleGrid>
                )}

                {/* Edit Modal */}
                <Modal isOpen={isEditing} onClose={handleClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Edit Service</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Title"
                                    value={selectedService?.title || ""}
                                    onChange={(e) => setSelectedService({ ...selectedService, title: e.target.value })}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <Textarea
                                    placeholder="Description"
                                    value={selectedService?.description || ""}
                                    onChange={(e) => setSelectedService({ ...selectedService, description: e.target.value })}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <Checkbox
                                    isChecked={selectedService?.featured || false}
                                    onChange={(e) => setSelectedService({ ...selectedService, featured: e.target.checked })}
                                >
                                    Featured
                                </Checkbox>
                            </FormControl>
                            <FormControl mt={4}>
                                {/* Thumbnail Upload */}
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleThumbnailChange}
                                />
                                {selectedService?.thumbnail && (
                                    <Image
                                        src={selectedService?.thumbnail}
                                        alt="Thumbnail"
                                        h={"100px"}
                                        mt={2}
                                    />
                                )}
                                {thumbnailURL && (
                                    <Image src={thumbnailURL} alt="Thumbnail" mt={2} maxH={36} maxW="100%" objectFit="cover" />
                                )}
                            </FormControl>
                            <FormControl mt={4}>
                                <Select
                                    placeholder="Select File Type"
                                    defaultValue={selectedService?.fileType || "access"} // Set default value to 'access'
                                    onChange={(e) => setSelectedService({ ...selectedService, fileType: e.target.value })}
                                >
                                    <option value="pdf">Access Database</option>
                                    <option value="pdf">PDF</option>
                                    <option value="doc">DOC</option>
                                    {/* Add more file types as needed */}
                                </Select>
                            </FormControl>
                            {/* Add more fields as needed */}
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={handleSave}>
                                Save
                            </Button>
                            <Button colorScheme="red" mr={3} onClick={handleDelete}>
                                Delete
                            </Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    );
};

export default ManageProjects;
