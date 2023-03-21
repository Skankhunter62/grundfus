import React from 'react';
import classes from './SimplePost.module.css'
import {useGetSinglePost} from "../../../../WC_WP_API/CustomHooksAndFunctions/wp_hooks/wpHooks";
import SimplePostTextPart from "./SimplePostTextPart/SimplePostTextPart";
import SimplePostImgPart from "./SimplePostImgPart/SimplePostImgPart";

const SimplePost = () => {
    const singlePosts = useGetSinglePost(671)
    return (
        <div className={classes.SimplePostLayout}>
            <SimplePostTextPart
                title={singlePosts?.title?.rendered}
                content={singlePosts?.content?.rendered}
                subContent={singlePosts?.acf?.second_abstract_of_main_post}
            />
            <SimplePostImgPart
                postImg={singlePosts?.fimg_url}
                acf={singlePosts?.acf}
            />
        </div>
    );
};

export default SimplePost;