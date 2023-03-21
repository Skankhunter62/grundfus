import React from 'react';
import classes from "./BottomSinglePost.module.css";
import PostsPagesTitle from "../../../../../components/UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";

const BottomSinglePost = ({post}) => {
    return (
        <>
            <div className={classes.bottom_post_img_block}>
                <img
                    src={post?.fimg_url}
                    alt="Насосы Grundfos с доставкой в Москве"
                    className={classes.bottom_post_img}
                    width={350}
                    height={300}
                />
                {post?.acf?.sub_img !== false
                    ? <img src={post?.acf?.sub_img} alt="Насосы Grundfos с доставкой в Москве" width={350} height={350} className={`${classes.bottom_post_img} ${classes.absolute_img}`}/>
                    : <></>
                }
            </div>
            <div className={classes.bottom_post_info_section}>
                <div>
                    <PostsPagesTitle>{post?.title?.rendered}</PostsPagesTitle>
                </div>
                <div className={classes.bottom_post_info_text}>
                    {post?.content?.rendered}
                </div>
                {
                    post?.acf?.sub_blog_text !== ''
                        ? <div className={classes.bottom_post_info_text}>{post?.acf?.sub_blog_text}</div>
                        : <></>
                }
                {
                    post.acf.third_blog_abstract !== ''
                        ? <div className={
                            post?.id !== 733 ? classes.bottom_post_info_text : `${classes.bottom_post_info_text} ${classes.third_text}`
                        }>{post?.acf?.third_blog_abstract}</div>
                        : <></>
                }
                {
                    post?.acf?.fouth_blog_text !== ''
                        ? <div className={
                            post.id !== 733 ? classes.bottom_post_info_text : `${classes.bottom_post_info_text} ${classes.third_text}`
                        }>{post?.acf?.fouth_blog_text}</div>
                        : <></>
                }
            </div>
        </>
    );
};

export default BottomSinglePost;