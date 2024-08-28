import "./index.css";

export const List = ({ tasks, deleteTask }) => {
    return (
        <div className="main-container">
            <ol className="ol-style">
                {tasks.map((task, index) => (
                    <li className="li-style" key={index}>
                        <div className="border-style">
                            <div className="list-container">
                                {task}
                            </div>
                        </div>
                        <button 
                            className="delete-button" 
                            onClick={() => deleteTask(index)}
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
};
