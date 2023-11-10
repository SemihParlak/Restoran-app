import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Cm-zH31FQor-88Htg0R7ys8x8fxnbp1iGlO4Y0D45QBrlNomdBWIWezgCaHtIdcvIx9_5VcKOgqO2g_nU3ttwOaKSWMLE2Fsf0CYkRPY0UQ0fV12lgE8ujuxzVnsZHYx',
    },
})
