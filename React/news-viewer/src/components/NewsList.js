import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = () => {
    // set var using useState
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    // implement calling api using useEffect
    useEffect(() => {
        //async 사용하는 함수 내부 선언
        const fetchData = async () => {
            // loading 중
            setLoading(true);
            try { 
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=3134238559804252a5bf43a248e0af09',
                );
                setArticles(response.data.articles);
            }
            catch (e) {
                console.log(e);
            }
            // loading 완료
            setLoading(false);
        };

        // 실행
        fetchData();
    }, []);


    // loading 중(대기)
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }
    // articles 값이 아직 설정되지 않았을 경우
    if (!articles) {
        return null;
    }
    // articles 값이 유효한 경우
    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
}

export default NewsList;