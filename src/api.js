import axios from "axios";
export async function getNewsByKeyword(keyword) {
    console.log('came inside Keyword');
    const news = await axios.get(
        `/api/news?access_key=66261eeb5a38273918edbbbe0eb287a1&keywords=${keyword}&sources=en,-de&sort=popularity&limit=15&sources=cnn,-bbc`
    );
    // No null check required, cause predefined keywords are used in this method
    const trimmedNews = trimNewsDescription(news.data.data)
    return trimmedNews
}


export async function getRandomNews() {
    console.log('came inside random method');
    const news = await axios.get(
        `/api/news?access_key=66261eeb5a38273918edbbbe0eb287a1&sources=en,-de&sort=popularity&limit=15&sources=cnn,-bbc`
    );
    const trimmedNews = trimNewsDescription(news.data.data)
    return trimmedNews
}

export async function getNewsByKeywordAndFilter(keyword, filter) {
    console.log('Came inside getNewsByKeywordAndFilter');
    let baseUrl = '/api/news?access_key=66261eeb5a38273918edbbbe0eb287a1&sort=popularity&limit=15'
    if (keyword) {
        baseUrl = baseUrl + `&keywords=${keyword}`
    }
    if (filter.Language) {
        baseUrl = baseUrl + `&languages=${filter.Language}`
    } else {
        // default language
        baseUrl = baseUrl + `&languages=en`
    }
    if (filter.Country) {
        baseUrl = baseUrl + `&countries=${filter.Country}`
    }
    if (filter.Source) {
        baseUrl = baseUrl + `&sources=${filter.Source}`
    }
    console.log('Filter', filter);
    console.log(baseUrl);
    const news = await axios.get(baseUrl
    );
    const trimmedNews = trimNewsDescription(news.data.data)
    return trimmedNews
}

function trimNewsDescription(news) {
    console.log(news);
    news.forEach((newsItem, i) => {
        if (newsItem.description.length > 450) {
            const desc = newsItem.description
            console.log(desc);
            const lastBeforeSentEnd = desc.slice(0, desc.length - 2).lastIndexOf('.');
            news[i].description = desc.slice(0, lastBeforeSentEnd)
            // console.log('lastbefore', lastBeforeSentEnd);
        }
    })

    return news;

}