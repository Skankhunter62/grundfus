import React from 'react';
import classes from './BottomPosts.module.css'
import {usePostBottomBlock} from "../../../../WC_WP_API/CustomHooksAndFunctions/wp_hooks/wpHooks";
import BottomSinglePost from "./bottom_ingle_post/BottomSinglePost";

const BottomPosts = () => {
    const postsByBottom = usePostBottomBlock()
    return (
        <div className={classes.bottom_posts_layout}>
            {postsByBottom.map(post =>
                <div className={classes.bottom_post_block} key={post.id}>
                    <BottomSinglePost post={post}/>
                </div>
            )}
        </div>
    );
};

export default BottomPosts;