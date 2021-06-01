import React from 'react';
import { FlatList } from 'react-native';
import Item from './item';

const servicos = [
    {
        id: 1,
        nome: 'Banho e Tosa',
        preco: 49.90,
        descricao: 'Deixa seu pet cheirosinho e com o pelo aparado',
        quantidade: 1
    },
    {
        id: 2,
        nome: 'Vacina V4',
        preco: 70,
        descricao: 'Uma dose da vacina V4, seu pet precisa de duas',
        quantidade: 2
    },
    {
        id: 3,
        nome: 'Consulta',
        preco: 150,
        descricao: 'Seu pet está doente ? nos cuidamos.',
        quantidade: 1
    }
];

export default function Servicos() {
    return <>
        <FlatList
            data={servicos}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </>
}