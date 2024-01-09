const person = {
    name: 'Ranga',
    address : {
        line1 : 'Seoul',
        country : 'Korea'
    },
    profiles: ['twitter','github'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
};

export default function LearningJavaScript(){
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    );
}