import "./index.css";
import Swal from 'sweetalert2';

export const TrashButton = ({ deleteTrash }) => {
    const modalWindow = () => {
        Swal.fire({
            title: 'Модальное окно',
            text: 'пошел нафик',
            icon: 'info',
            confirmButtonText: 'ОК'
        });
    };

    const handleClick = () => {
        modalWindow();  
        deleteTrash();  
    };

    return (
        <div className="TrashButton-style">
            <button onClick={handleClick} className="task-button">
                Fucking Trash
            </button>
        </div>
    );
};
