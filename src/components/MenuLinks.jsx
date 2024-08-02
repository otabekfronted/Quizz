// custo hook
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function MenuLinks() {
    const {
        data: quizzes,
        isPending,
        error,
    } = useFetch(
        "https://online-json-server-api.up.railway.app/project/66ab6c4b1d2cd3eb1145d385/quizzes"
    );

    return (
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="menu-list">
                {quizzes &&
                    quizzes.data.map((item) => {
                        return (
                            <Link
                                to={`/quiz/${item.title}`}
                                key={item.title}
                                className="menu-item header-logo"
                            >
                                <figure style={{ backgroundColor: item.color }}>
                                    <img src={item.icon} alt="" />
                                </figure>
                                <span>{item.title}</span>
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
}

export default MenuLinks;
