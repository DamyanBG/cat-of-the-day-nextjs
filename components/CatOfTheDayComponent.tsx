import { getCatOfTheWeek } from "@/api/catApi";

const CatOfTheWeekComponent = async () => {
    const photoUrl = await getCatOfTheWeek()

    return (
        
        <img src={photoUrl} alt="Cat of the week!" />

        // <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg" alt="Cat of the day!" />
    );
};

export default CatOfTheWeekComponent;
