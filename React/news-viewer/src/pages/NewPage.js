import React from 'react';
import Categories from '../components/Categories';
import NewList from '../components/NewsList';

const NewPage = ({ match }) => {
    // 카테고리가 선택되지 않으면 기본값 = all 로 사용
    const category = match.params.category || 'all';

    return (
        <>
        <Categories />
        <NewList category={category} />
        </>
    )
};

export default NewPage;