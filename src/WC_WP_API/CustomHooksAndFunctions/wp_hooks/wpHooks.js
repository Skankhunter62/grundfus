import axios from "axios";
import {useEffect, useState} from "react";
import {WP_base_url} from "../../woocommerce.api";

/*get single post by id*/
export const useGetSinglePost = (postId) => {
    const [singlePost, setSinglePost] = useState([]);
    useEffect(() => {
        axios.get(WP_base_url + `/posts?include[]=${postId}`)
            .then(response => {if (response.status === 200) {setSinglePost(...response.data)} else {console.log('Error when fetch data by single post')}})
    }, [postId])
    return singlePost;
}
/*get posts by single category*/
export const useGetPostsByCategory = (categoryID, loaderCallback) => {
    const [categoryPosts, setCategoryPosts] = useState([]);
    useEffect(() => {
        axios.get(WP_base_url + `/posts?categories=${categoryID}`)
            .then(response => {
                if (response.status === 200) {
                    setCategoryPosts(response.data)
                    loaderCallback()}
                else {console.log('Error when fetch data by post in category')}
            })
    }, [categoryID])
    return categoryPosts;
}
/*get current post form 34 category*/
export const usePostBottomBlock = () => {
    const [postList, setPostList] = useState([])
    useEffect(()=>{
        axios.get(WP_base_url+`/posts?categories=34&acf_format=standard`)
            .then(response => {
                if (response.status === 200) { setPostList(response.data)} else {console.log('Error when fetch data by bottom posts')}
            })
    }, [])
    return postList;
}
