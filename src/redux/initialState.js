const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe',
            category: 'Sport',
        },
        {
            id: '2',
            title: 'Article title II',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('04-04-2023'),
            author: 'John Doe',
            category: 'Sport',
        },
        {
            id: '3',
            title: 'Article title III',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('03-09-2023'),
            author: 'John Doe',
            category: 'Sport',
        },
        {
            id: '4',
            title: 'Article title IV',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('06-02-2023'),
            author: 'John Doe',
            category: 'Movies',
        },
    ],
    categories: [
        'Sport',
        'News',
        'Movies',
    ]
};

export default initialState;