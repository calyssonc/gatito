import React from 'react';
import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Item from './item';
import estiloGlobal from '../../estilos';


const servicos = [
    {
        id: 1,
        nome: 'Banho e Tosa',
        preco: 49.90,
        descricao: 'Deixa seu pet cheirosinho e com o pelo aparado'
    },
    {
        id: 2,
        nome: 'Vacina V4',
        preco: 70,
        descricao: 'Uma dose da vacina V4, seu pet precisa de duas'
    },
    {
        id: 3,
        nome: 'Consulta',
        preco: 150,
        descricao: 'Seu pet está doente ? nos cuidamos.'
    }
];

export default function Servicos() {
    return <SafeAreaView style={estiloGlobal.preencher}>
        <StatusBar />
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={estiloGlobal.preencher}>
            <FlatList
                data={servicos}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </KeyboardAvoidingView>
    </SafeAreaView>
}