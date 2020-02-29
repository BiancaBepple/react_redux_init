export function addToPerson(person){
    return {
        type: '@person/ADD',
        person: person,
    };
}