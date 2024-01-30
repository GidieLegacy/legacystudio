import React, { useState } from 'react';
import {Box, Button, Flex, Input, List, ListItem, Text} from '@chakra-ui/react';

function SearchableDatabase({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filteredResults = data.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.response.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(filteredResults);
    };

    return (
        <Box>
            <Box display={"flex"} gap={2}>
                <Input
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <Button colorScheme={"red"} onClick={() => setSearchTerm('')}>Clear</Button>

            </Box>
            <List mt={4}>
                {searchResults.map(item => (
                    <Flex
                        key={item.title}
                    >
                        <Box
                            borderWidth="1px"
                            borderRadius="lg"
                            p={4}
                            width="80%"
                            mb={1}

                        >
                            <Text fontSize="2xl" mt={2} color="teal">
                                {item.response}
                            </Text>
                            <Text fontSize="sm">
                                {item.title}
                            </Text>
                        </Box>


                    </Flex>
                ))}
            </List>
        </Box>
    );
}

function Audio() {
    const data = [
        { title: 'وأنت من أهل الخير، أحلام سعيدة.', response: '1' },
        { title: 'طيب، راح أوقف التشغيل بعد 3 ساعات.', response: '2' },
        { title: 'يعد سمك القرش أسرع بالمقارنة مع الحيتان، حيث إن سمك القرش يسبح في الساعة الواحدة بمعدل 56 كم، بينما يسبح الحوت بمعدل 47 كم في الساعة.', response: '2' },
        { title: 'دلافين الأوركا من أخطر دلافين العالم', response: '1' },
        { title: 'أحب أسمع القرآن الكريم', response: '2' },
        { title: 'بشغِّل Metallica، أغنية "King Nothing".', response: '2' },
        { title: 'خلنا نسولف', response: '1' },
        { title: 'تحليلات البيانات تحوّل البيانات الخام إلى رؤى قابلة للتنفيذ.', response: '1' },
        { title: 'الرجولة الحقيقية هي الشهامة، والخلق الكريم، والشجاعة.', response: '2' },
        { title: 'إي، دي الأغنية المطلوبة', response: '2' },
        { title: 'آفا. هذي النكته مو حلوة', response: '3' },
        { title: 'تعرف هالشي، ولا ما تعرف؟', response: '1' },

    ];

    return (
        <SearchableDatabase data={data} />
    );
}

export default Audio;
