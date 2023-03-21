import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '33ab33c190msh4aa77f26c752f08p194b5fjsn5a06582edc2f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers:cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`) 
        })
    })
})


export const {
    useGetCryptosQuery,
} = cryptoApi

