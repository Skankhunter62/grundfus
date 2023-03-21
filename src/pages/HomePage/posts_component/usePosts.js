import axios from "axios";
import {useState, useEffect} from "react";

export const usePosts = (id) => {
    const siteURI = 'https://mybackend.rusgetter.store/wp-json/wp/v2'
    const [mainPost, setMainPost] = useState([]);

    useEffect(() => {
        getPostsAxios();
    }, [])

    let getPostsAxios = () => {
        axios.get(siteURI+`/posts?include[]=${id}`)
            .then(response => {
                if(response.status === 200){
                    setMainPost(response.data)
                }
            })
            .catch(error => {})
    }
    return mainPost;
}

export const useCategoriesMedia = () => {
    const siteURI = 'https://mybackend.rusgetter.store/wp-json/wp/v2'
    const [mainMedia, setMainMedia] = useState([]);

    useEffect(() => {
        getCategoriesMedia();
    }, [])

    let getCategoriesMedia = () => {
        axios.get(siteURI+`/media?filter[media_category]`)
            .then(response => {
                if(response.status === 200){
                    setMainMedia(response.data)
                }
            })
            .catch(error => {})
    }
    return mainMedia;
}

export const usePostCategories = (id) => {
    const siteURI = 'https://mybackend.rusgetter.store/wp-json/wp/v2'
    const [mainCategory, setMainCategory] = useState([]);

    useEffect(() => {
        getCategoryAxios();
    }, [])

    let getCategoryAxios = () => {
        axios.get(siteURI+`/posts?categories=${id}`)
            .then(response => {
                if(response.status === 200){
                    setMainCategory(response.data)
                }
            })
            .catch(error => {})
    }
    return mainCategory;
}
