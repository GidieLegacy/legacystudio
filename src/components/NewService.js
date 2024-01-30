import React, {useEffect, useState} from 'react';
import {
    VStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
    Checkbox,
    Flex,
    CircularProgress, FormHelperText
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import {storage, db, timeStamp, auth} from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";

const NewService = () => {
    const toast = useToast();

    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState('');
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');
    const [projectYear, setProjectYear] = useState('');
    const [projectYearError, setProjectYearError] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [projectFile, setProjectFile] = useState(null);
    const [projectFileError, setProjectFileError] = useState('');
    const [fileType, setFileType] = useState('Access Database');
    const [featured, setFeatured] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            console.log('Loading user...');
        }
        if (error) {
            console.log(error);
            return;
        }

        if (!user){
            console.log('User not logged in. Redirecting...');
            navigate('/dashboard');
        }
        console.log('User logged in successfully', user.email)
        //console.log('User logged in successfully', user)

    }, []);

    const handleThumbnailChange = (e) => {
        // Handle thumbnail file change
        setThumbnail(e.target.files[0]);
    };

    const handleProjectFileChange = (e) => {
        // Handle project file change
        setProjectFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);
            //prevent submission of empty form
            if (thumbnail === null) {
                setThumbnailError('Thumbnail is required');
                setIsSubmitting(false);
                return;
            }
            if (title.trim() === '') {
                setTitleError('Title is required');
                setIsSubmitting(false);
                return;
            }
            if (description.trim() === '') {
                setDescriptionError('Description is required');
                setIsSubmitting(false);
                return;
            }
            if (projectYear.trim() === '') {
                setProjectYearError('Project Year is required');
                setIsSubmitting(false);
                return;
            }
            if (projectFile === null) {
                setProjectFileError('Project File is required');
                setIsSubmitting(false);
                return;
            }
            // Upload thumbnail to storage
            const thumbnailRef = storage.ref(`thumbnails/${thumbnail.name}`);
            await thumbnailRef.put(thumbnail);

            // Get thumbnail URL
            const thumbnailURL = await thumbnailRef.getDownloadURL();

            // Upload project file to storage
            const projectFileRef = storage.ref(`projects/${projectFile.name}`);
            await projectFileRef.put(projectFile);

            // Get project file URL
            const projectFileURL = await projectFileRef.getDownloadURL();

            // Add service to Firestore
            await db.collection('services').add({
                thumbnail: thumbnailURL,
                title,
                description,
                projectFile: projectFileURL,
                fileType,
                timestamp: timeStamp,
                addedBy: auth.currentUser.email,
                featured: featured,
                projectYear: projectYear,
            }).then(() => {
                console.log('Service added successfully!');
                navigate('/projects')
            });

            // Display success toast
            toast({
                title: 'Service added successfully!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setIsSubmitting(false);
        } catch (error) {
            setIsSubmitting(false);
            // Display error toast
            toast({
                title: 'Error adding service',
                description: error.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            console.log(error)
        }
    };

    return (
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Box w={"100vw"} h={110} mt={-110} background={"blackAlpha.700"}></Box>
            <Box
                w={["100%", "50%"]}
                maxW={["100%", "50%"]}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                p={6}
            >
                <VStack spacing={4} align="stretch">
                    <FormControl>
                        <FormLabel>Thumbnail</FormLabel>
                        <Input type="file" onChange={handleThumbnailChange} />
                        <FormHelperText>{thumbnailError}</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Project/Service Title</FormLabel>
                        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <FormHelperText>{titleError}</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                        <FormHelperText>{descriptionError}</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Project (File Upload .accdb)</FormLabel>
                        <Input type="file" onChange={handleProjectFileChange} />
                        <FormHelperText>{projectFileError}</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <FormLabel>File Type</FormLabel>
                        <Input type="text" value={fileType} onChange={(e) => setFileType(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Project Year</FormLabel>
                        <Input type="text"  value={projectYear} onChange={(e) => setProjectYear(e.target.value)}/>
                        <FormHelperText>{projectYearError}</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Featured?</FormLabel>
                        <Checkbox isChecked={featured} onChange={() => setFeatured(!featured)} />
                    </FormControl>

                    <Box>
                        <Button colorScheme="teal" onClick={handleSubmit} isLoading={isSubmitting}>
                            {isSubmitting ? (
                                <CircularProgress isIndeterminate size="24px" color="teal" />
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </Flex>

    );
};

export default NewService;
