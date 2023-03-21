import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

/*woocommerce base*/
export const wpBaseUrl = 'https://mybackend.rusgetter.store/wp-json/wp/v2/'
export const wcBaseUrl = 'https://mybackend.rusgetter.store/wp-json/wc/v3/'
export const consumerKey = 'ck_cefbcaa40e47276dc6064169c20751350a5365d3'
export const consumerSecret = 'cs_bd901cab6cdfd1bf119befce7fdd291bcdd352d2'
export const token = 'Y2tfY2VmYmNhYTQwZTQ3Mjc2ZGM2MDY0MTY5YzIwNzUxMzUwYTUzNjVkMzpjc19iZDkwMWNhYjZjZGZkMWJmMTE5YmVmY2U3ZmRkMjkxYmNkZDM1MmQy'
export const data = { auth: { "Content-Type": "application/json",  "username": consumerKey,  "password": consumerSecret } }

export const api = new WooCommerceRestApi({
    url:  'https://mybackend.rusgetter.store/',
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    version: 'wc/v3',
    axiosConfig: {
        headers: {}
    }
})

export const reviewsApi = new WooCommerceRestApi({
    url:  'https://mybackend.rusgetter.store/',
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    version: 'wc/v2',
    axiosConfig: {
        headers: {}
    }
})

/*WordPress base*/
export const WP_base_url = 'https://mybackend.rusgetter.store/wp-json/wp/v2'