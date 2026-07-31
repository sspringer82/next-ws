import { deleteMovie } from "@/functions/movie.function";
import { IxButton } from "@siemens/ix-react";

const DeleteButton: React.FC<{ id: string }> = ({ id }) => {
    return <IxButton onClick={() => { deleteMovie(id) }}>Delete</IxButton>
};

export default DeleteButton;