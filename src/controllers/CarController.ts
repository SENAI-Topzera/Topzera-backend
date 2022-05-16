
import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

const cars = [
    {
        id: 1,
        model: 'Celtinha do Lenzi',
        assembler: 'Chevrolet',
        year: 2000,
        owner: 'José Miranda',
        description: '1.6 Flex',
        imgs: [ 'https://s1.1zoom.me/big3/575/BMW_Tuning_4-Series_Black_Metallic_576020_3840x2160.jpg',
                'https://picsum.photos/id/238/500',        
                'https://picsum.photos/id/239/500']
    },
    {
        id: 2,
        model: 'Onix',
        assembler: 'Chevrolet',
        year: 2020,
        owner: 'José Miranda',
        description: '1.6 Flex',
        imgs: [ 'https://picsum.photos/id/240/500',
                'https://picsum.photos/id/241/500',        
                'https://picsum.photos/id/242/500']
    },
    {
        id: 3,
        model: 'Astra',
        assembler: 'Chevrolet',
        year: 2005,
        owner: 'José Miranda',
        description: '1.6 Flex',
        imgs: [ 'https://picsum.photos/id/243/500',
                'https://picsum.photos/id/244/500',        
                'https://picsum.photos/id/245/500']
    },
    {
        id: 4,
        model: 'Onix',
        assembler: 'Chevrolet',
        year: 2020,
        owner: 'José Miranda',
        description: '1.6 Flex',
        imgs: [ 'https://picsum.photos/id/257/500',
                'https://picsum.photos/id/247/500',        
                'https://picsum.photos/id/248/500']
    },
    {
        id: 5,
        model: 'Astra',
        assembler: 'Chevrolet',
        year: 2005,
        owner: 'José Miranda',
        description: '1.6 Flex',
        imgs: [ 'https://picsum.photos/id/256/500',
                'https://picsum.photos/id/250/500',        
                'https://picsum.photos/id/251/500']
    },
    {
        id: 6,
        model: 'Onix',
        assembler: 'Chevrolet',
        year: 2020,
        owner: 'José Miranda',
        description: '1.6 Flex',
        imgs: [ 'https://picsum.photos/id/255/500',
                'https://picsum.photos/id/253/500',        
                'https://picsum.photos/id/254/500']
    }]

export class CarController {
    async findAll(request: Request, response: Response) {
        return response.json(await prismaClient.carro.count());
    }
}