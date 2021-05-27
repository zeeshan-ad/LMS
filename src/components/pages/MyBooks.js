import React from 'react';
import './SearchBooks.css';
import BooksCard from '../BooksCard';


function MyBooks() {
    
    return (
        <div className="containerSearch">
            <div className="SearchResult">
            
            <div className="Bars">
            <div><i class="fas fa-sort-amount-up"></i> Sort</div>
            <div><i class="fas fa-filter"></i> Filter</div>    
            </div>
            
            <div className="DisplayBooks">
            <BooksCard url="https://www.writersdigest.com/.image/t_share/MTcxMDY0NzcxMzIzNTY5NDEz/image-placeholder-title.jpg"/>
            <BooksCard url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"/>
            <BooksCard url="https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg"/>
            </div>
         </div>  
        </div>
    )   
}

export default MyBooks
