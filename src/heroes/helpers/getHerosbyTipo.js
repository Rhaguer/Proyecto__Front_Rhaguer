import { heroes } from '../data/Heroes';

export const getHerosbyTipo = (tipo) => {
    const aux = ['anime', 'comic'];
    if (!aux.includes(tipo)) {
        throw new Error(`El tipo no se encuentra: "${tipo}"`); 
    }
    return heroes.filter(hero => hero.tipo === tipo);
};
