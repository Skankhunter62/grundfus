import React, {useState ,useEffect} from 'react';
import classes from "./CatalogSubCategories.module.css";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";

const CatalogSubCategories = () => {
    const {singleCategory, categories} = useTypedSelector(state => state);
    const [currentCategory, setCurrentCategory] = useState([{id: ''}])

    useEffect(() => {
        if(singleCategory[0] !== undefined){
            setCurrentCategory(...singleCategory)
        }
    }, [singleCategory])

    return (
        <div>
            <ul className={classes.catalogMainTopMenu}>
                {
                    categories.map(category =>
                        Number(category.parent) === Number(currentCategory.id) ? (
                            <li key={Math.random()} className={classes.mb}>
                                <Link to={`/catalog/${category.slug}`}>
                                    {category.name}
                                </Link>
                            </li>) : (<React.Fragment key={Math.random()}></React.Fragment>)
                    )
                }
            </ul>
        </div>
    );
};

export default CatalogSubCategories;