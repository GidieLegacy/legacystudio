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

function RussianTraining() {
    const data = [
        { title: 'алиса слушать альбом бутырки', response: '3 > 5 > 5 > 4' },
        { title: 'песня из фильма призрак с патриком суэйзи слушать', response: '3 > 5 > 5 > 7' },
        { title: 'тв 1000 русское кино', response: '3 > 8 > 6 > 3' },
        { title: 'что интересного посмотреть по телевизору сегодня вечером', response: '3 > 1 > 2 > 1' },
        { title: 'насос для велосипеда цена', response: '3 > 9 > 3' },
        { title: 'сколько стоит самый дешевый билет на самолет из краснодара в москву', response: '3 > 7' },
        { title: 'включи кондиционер на двадцать градусов', response: '1 > 8' },
        { title: 'выключи компьютер', response: '1 > 9 > 4 > 1' },
        { title: 'спасибо', response: '5 > 1 > 2' },
        { title: 'как у тебя дела', response: '2 > 1' },
        { title: 'полночь в салеме нэнси дрю скачать торрент на русском', response: '3 > 8 > 0' },
        { title: 'интерстеллар скачать бесплатно торрент', response: '3 > 8 > 8 > 5' },
        { title: '💩💩💩', response: '5 > 5' },
        { title: 'стоп стоп', response: '5 > 4' },
        { title: 'да', response: '1 > 7 > 2 > 6' },
        { title: 'отмени заказ машины в такси', response: '1 > 7 > 1 > 4' },
        { title: 'открой опера точка ком', response: '1 > 1 > 3' },
        { title: 'открой оперу', response: '1 > 1 > 4 > 4' },
        { title: 'английский', response: '1 > 4' },
        { title: 'открой папку с видео на компе', response: '1 > 2 > 7' },
        { title: 'есть пробки на маршруте до работы?', response: '3 > 2 > 3 > 4' },
        { title: 'покажи стоматологии в моем районе на яндекс картах', response: '3 > 2 > 4 > 2' },
        { title: 'какие фильмы идут в кинотеатре аврора', response: '3 > 1 > 1' },
        { title: 'таблица менделеева', response: '3 > w' },
        { title: 'алис распознай музыку, которая играет на компе', response: '4 > 5 > 2' },
        { title: 'что за песню ты включила', response: '4 > 5 > 2' },
    ];

    return (
        <SearchableDatabase data={data} />
    );
}

export default RussianTraining;
