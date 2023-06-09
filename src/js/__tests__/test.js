import Character from "../app";
import { Team } from "../app";

test('testing add method', () => {
    const medic = new Character('Medic');
    const blueBerets = new Team();
    blueBerets.add(medic);
    expect(() => blueBerets.add(medic)).toThrow(new Error('Повторное добавление персонажа не возможно'))
})

test('testing addAll method', () => {
    const infiltrator = new Character('Infiltrator')
    const lightAssault = new Character('lightAssault')
    const engineer = new Character('Engineer')
    const vanu = new Team('Vanu')
    vanu.addAll(infiltrator, lightAssault, engineer)
    const result = {members: new  Set([infiltrator, lightAssault, engineer])}
    expect(vanu).toEqual(result);
})

test('testing arrey method', () => {
    const terranRepublic = new Team();
    terranRepublic.addAll('infiltrator', 'lightAssault', 'engineer');
    terranRepublic.toArrey();
    expect(terranRepublic.members).toEqual(['infiltrator', 'lightAssault', 'engineer'])
})