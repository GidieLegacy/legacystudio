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
        <Box >
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

function RussianExam() {
    const data = [
        { title: 'открой ютуб канал юрия дудя', response: '1 > 2 > 1' },
        { title: 'как называется праздник когда яйца красят', response: '3 > q' },
        { title: 'культура смотреть онлайн', response: '3 > 8 > 6 > 2' },
        { title: 'программа матч тв', response: '3 > 1 > 2 > 2' },
        { title: 'скачать порно с азиатками', response: '3 > 8 > 3 > 2' },
        { title: 'из дома', response: '1 > 7 > 1 > 9' },
        { title: 'алиса давай споем песню караоке розенбаума', response: '3 > 5 > 4' },
        { title: 'когда начнётся дождь сегодня', response: '3 > 6 > 1' },
        { title: 'включи мне английский рок', response: '3 > 5 > 5 > 1' },
        { title: 'как называется', response: '4 > 5 > 2' },
        { title: 'ты умеешь заказывать такси?', response: '4 > 7 > 1' },
        { title: 'сделать узи сосудов шеи', response: '3 > 9 > 2' },
        { title: 'сколько времени на мальдивах', response: '4 > 3 > 1' },
        { title: 'открой московский проспект 116 в приложении карт', response: '3 > 2 > 5 > 2' },
        { title: 'открой пикабу в режиме инкогнито', response: '1 > 1 > 1 > 4' },
        { title: 'включи подкаст сказки на ночь', response: '3 > 8 > 5' },
        { title: 'подскажи какая машина за мной приедет', response: '1 > 7 > 2 > 2' },
        { title: 'открой историю яндекс браузера', response: '1 > 1 > 2 > 2' },
        { title: 'в спальне свет включен?', response: '1 > 8' },
        { title: 'сколько километров между санкт петербургом и сочи', response: '3 > 2 > 3 > 6' },
        { title: 'цена билета до краснодара', response: '3 > 9 > 3' },
        { title: 'Wie geht es Ihnen?', response: '5 > 2' },
        { title: 'громкость четыре на телевизоре', response: '1 > 8' },
        { title: 'давай поиграем в города', response: '2 > 2' },
        { title: 'послушай и скажи мне какая музыка тут играет', response: '4 > 5 > 2' },
    ];

    return (
        <SearchableDatabase data={data} />
    );
}

export default RussianExam;
