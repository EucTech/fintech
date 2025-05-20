import axios from "axios";

// Endpoints

const apiBaseUrl = "https://coinranking1.p.rapidapi.com";

const coinUrl = `${apiBaseUrl}/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=[0]=1&orderDirection=desc&limit=30&offset=0&orderBy=marketCap`;

interface CryptoApiCallParams {
    [key: string]: string | number | boolean | undefined;
}

interface CryptoApiCallOptions {
    method: string;
    url: string;
    params: CryptoApiCallParams;
    headers: {
        "X-RapidAPI-Key": string;
        "X-RapidAPI-Host": string;
    };
}

const CryptoApiCall = async (
    endpoints: string,
    params?: CryptoApiCallParams
): Promise<any> => {
    const options: CryptoApiCallOptions = {
        method: "GET",
        url: endpoints,
        params: params ? params : {},
        headers: {
            "X-RapidAPI-Key": `${process.env.XRAPID_API_KEY}`,
            "X-RapidAPI-Host": `${process.env.XRAPID_API_HOST}`,
        },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const FetchAllCoins = async () => {
    return await CryptoApiCall(coinUrl);
}