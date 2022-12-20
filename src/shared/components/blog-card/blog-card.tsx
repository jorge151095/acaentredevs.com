import React from 'react';
import './blog-card.scss';
import imgn from '../../../assets/imagblog/img.png';

interface IBlog {
    title: string;
    content: string;
    href: string;
    date: string;
}

const BlogCard: React.FC<IBlog> = ({ title, content, href, date }) => {
    return (
        <article className="relative blog-item-holder center-relative has-post-thumbnail blog-container">
            <div className="post-thumbnail">
                <a href={href}>
                    <div className="post-thumbnail-image">
                        <img src={imgn} alt="imagenes blog" />
                    </div>
                </a>
            </div>
            <div className="entry-holder">
                <h2 className="entry-title">
                    <a href={href}>
                        <h2>{title}</h2>
                    </a>
                </h2>
                <div className="entry-info">
                    <div className="entry-info-left">
                        <div className="cat-links">
                            <ul>
                                <li>
                                    <a href={href}>Uncategorized</a>
                                </li>
                            </ul>
                        </div>
                        <div className="entry-date published">
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className="excerpt">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export { BlogCard };
