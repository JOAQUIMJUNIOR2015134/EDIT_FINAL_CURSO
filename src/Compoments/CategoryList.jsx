import { useEffect, useState } from "react";
import SimpleCard from "./SimpleCard";
import { Link } from "react-router-dom";
import "../Styles/SimpleCard.css";

function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from an API or define them here
        const fetchCategories = async () => {
            const response = await fetch("https://api.escuelajs.co/api/v1/categories");
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-list">
            {categories.slice(0, 4).map((category) => (
                <Link to={`/category/${category.name}`} key={category.name}>
                    <SimpleCard
                    className={"simpleCardDefaut"}
                        image={category.image}
                        title={category.name}
                    />
                </Link>
            ))}
        </div>
    );
}

export default CategoryList;