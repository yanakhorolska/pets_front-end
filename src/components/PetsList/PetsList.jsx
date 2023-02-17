import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const PetsList = () => {
    const dispatch = useDispatch();
    const petsList = useSelector();
    const convertDate = date => {
        return moment(date).format('DD.MM.YYYY');
    };
    
    return (
        <>
            <ul>
                {petsList.length > 0 ? (
                    petsList.map(pet => (
                        <li key={pet._id} >
                            <img
                                src={
                                    pet.imgURL ===
                                    '../../images/defoult/defoultPets.jpg'
                                    ? '../../images/defoult/defoultPets.jpg'
                                    : pet.imgURL
                                }
                                alt="Pet Foto"
                            />
                            <div >
                                <button
                                    type="button"
                                    onClick={() => {
                                        dispatch((pet._id));
                                    }}
                                >
                                    del
                                </button>
                                <p>
                                    <span> Name:</span> {pet.name}
                                </p>
                                <p>
                                    <span> Date of birth:</span> {convertDate(pet.birthday)}
                                </p>
                                <p>
                                    <span> Breed:</span> {pet.breed}
                                </p>
                                <p>
                                    <span> Comments:</span>{pet.comments}
                                </p>
                            </div>
                        </li>
                    ))
                ) : (
                    <img
                        src="../../images/defoult/defoultPets.jpg"
                        alt="Pet Foto"
                    />
                )}
            </ul>
        </>
    );
};
export default PetsList;
