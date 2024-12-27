import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {fetchSections} from "../constant/articlesDataService";

const ArticleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArticle = async () => {
            try {
                const sections = await fetchSections();
                const foundArticle = sections
                    .flatMap((section) => section.articles)
                    .find((article) => article.id === parseInt(id));
                setArticle(foundArticle);
            } catch (error) {
                console.error("Erreur lors de la récupération de l'article :", error);
            } finally {
                setLoading(false);
            }
        };

        getArticle();
    }, [id]);

    if (loading) {
        return <p>Chargement de l'article...</p>;
    }

    if (!article) {
        return <p>Article non trouvé.</p>;
    }

    return (
        <div className="max-w-[800px] mx-auto p-6 bg-white shadow-md">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Retour
            </button>
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <img src={article.image} alt={article.title} className="w-full h-auto mb-4" />
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetail;
