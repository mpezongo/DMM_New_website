import {Link} from "react-router-dom";
import {useState} from "react";

const Section = ({ section }) => {
    const { title, description, articles } = section;

    const truncateContent = (content, wordLimit) => {
        const words = content.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + " ...";
        }
        return content;
    };

    const [visibleArticles, setVisibleArticles] = useState(3);

    const loadMoreArticles = () => {
        setVisibleArticles((prev) => prev + 3);
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto p-6 bg-white mb-10">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-8">{description}</p>

            <div className="space-y-6">
                {articles.slice(0, visibleArticles).map((article, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 gap-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <Link to={`/article/${article.id}`} className="flex gap-6">
                            <div className="md:w-1/3">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-38 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="md:w-2/3 text-left">
                                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                                <p className="text-gray-600">
                                    {truncateContent(article.content, 40)}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {visibleArticles < articles.length && (
                <div className="mt-8 text-center">
                    <button
                        onClick={loadMoreArticles}
                        className="text-blue-500 font-bold hover:underline text-lg"
                    >
                        Voir plus ↓
                    </button>
                </div>
            )}
        </div>
    );
};
export default Section;
