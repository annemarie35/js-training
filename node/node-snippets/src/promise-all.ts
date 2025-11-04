// An exemple of bad practices

const badPractice = async () => {
    const results = [];

    await Promise.all(
        ['A', 'B', 'C'].map(async (item) => {
            const delay = Math.random() * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
            console.log(`Done ${item} after ${Math.round(delay)} ms`);
            results.push(item);
        })
    );

    console.log('Results: ', results); // Results with random A, B, C order
};

// Good practice
const tata = async () => {
    const orderedResults = await Promise.all(
        ['A', 'B', 'C'].map(async (item) => {
            const delay = Math.random() * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
            console.log(`Done ${item} after ${Math.round(delay)} ms`);
            return item;
        })
    );

    console.log('orderedResults: ', orderedResults); // Results with random A, B, C order};
};

badPractice();
tata();
