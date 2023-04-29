import React, {useEffect, useState} from 'react';
import {
    Box, Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel, IconButton, Image,
    Input, Radio, RadioGroup,
    Select,
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";
import HeroSection from "../misc/heroSection";
import {useCollection} from "react-firebase-hooks/firestore";
import {db, storage, timeStamp} from '../firebase';
import {CgClose} from "react-icons/cg";

const NewBlog = () => {
    const [users, setUsers] = useCollection(db.collection("users"));
    const author = users?.docs?.map((doc) => {
        return doc.data().name;
    });

    const [category, setCategory] = React.useState("1");
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [authorName, setAuthorName] = useState('');

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    const handleClearButtonClick = () => {
        setSelectedFile(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const storageRef = storage.ref();
        const fileRef = storageRef.child(selectedFile.name);
        fileRef.put(selectedFile).then(() => {
            fileRef.getDownloadURL().then((url) => {
                db.collection("blogs").add({
                    title: title,
                    excerpt: excerpt,
                    content: content,
                    author: authorName,
                    category: category,
                    imageUrl: url,
                    //createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    createdAt: timeStamp
                }).then(() => {
                    setTitle('');
                    setContent('');
                    setAuthorName('');
                    setSelectedFile(null);
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
            });
        });
    };

    useEffect(() => {
        if (users) {
            users.docs?.map((doc) => {
                //console.log(doc.data());
            });
        }
    },[users]);
    return (
        <Box mt={-110}>
            <HeroSection title={"News and Blogs"} subtitle={"New Blog"} path={"/news-and-blogs"}/>
            <Flex width={"100%"} justify={"center"}>
                {/*Left*/}
                <Box p={"2%"} width={"60%"}>
                    <Text fontSize={"30px"} fontWeight={"bold"}>Create a new blog</Text>
                    <FormControl mt={"1%"}>
                        <FormLabel>Title</FormLabel>
                        <Input type='text' value={title} onChange={(event) => setTitle(event.target.value)} required />
                    </FormControl>
                    <FormControl mt={"1%"}>
                        <FormLabel>Excerpt</FormLabel>
                        <FormHelperText>Write a short exceprt for your blog</FormHelperText>
                        <Textarea
                            value={excerpt}
                            onChange={(event) => setExcerpt(event.target.value)}
                            placeholder={"Type in a maximum of 100 words..."}
                            size={"lg"}
                            required={true}
                        />
                    </FormControl>
                    <FormControl mt={"1%"}>
                        <FormLabel>Content</FormLabel>
                        <FormHelperText>Write your blog here</FormHelperText>
                        <Textarea
                            value={content}
                            onChange={(event) => setContent(event.target.value)}
                            placeholder={"write you blog here..."}
                            size={"lg"}
                            required={true}
                        />
                    </FormControl>
                    <FormControl mt={"1%"}>
                        <FormLabel>Author</FormLabel>
                        <Select placeholder="Select option" onChange={(e) => setAuthorName(e.target.value)}>
                            {author?.map((name) => {
                                return <option key={name}>{name}</option>;
                            })}

                        </Select>
                    </FormControl>
                    {/*Submit button*/}
                    <Box mt={"5%"} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Button colorScheme={"red"} onClick={handleSubmit}>Save Blog</Button>
                    </Box>


                </Box>

                {/*Right*/}
                <Box p={"2%"} width={"30%"}>
                    <Box>
                        <Text fontSize={"30px"} fontWeight={"bold"}>Preview</Text>
                        <Box mt={"2%"} border={"1px solid"} borderColor={"red.200"}>
                            <Box p={"2%"}>
                                <Text fontSize={"20px"} p={"2% 0"} fontWeight={"bold"}>Category</Text>
                                <RadioGroup onChange={setCategory} value={category}  p={"2%"}>
                                    <Stack direction='column'>
                                        <Radio value='1'>Crypto/Forex News</Radio>
                                        <Radio value='2'>Tech News</Radio>
                                        <Radio value='3'>Blogs</Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>
                        </Box>
                    </Box>
                    <Box mt={"2%"} border={"1px solid"} borderColor={"red.200"}>
                        <Box padding={"2%"}>
                            <Flex justifyContent={"space-between"}>
                                <Text fontSize={"20px"} p={"2% 0"} fontWeight={"bold"}>Featured Image</Text>
                                {selectedFile && (
                                    <IconButton
                                        aria-label="Clear selected image"
                                        icon={<CgClose />}
                                        size="sm"
                                        onClick={handleClearButtonClick}
                                    />
                                )}
                            </Flex>


                        </Box>
                        <Box padding={"2%"}>
                            {selectedFile ? (
                                <Image alt={"blog image"} src={URL.createObjectURL(selectedFile)} w={"100%"} h={"250px"} objectFit={"cover"} />
                            ) : (
                                <Box>
                                    <input type="file" onChange={handleFileInputChange} />
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Flex>


        </Box>
    );
};

export default NewBlog;
