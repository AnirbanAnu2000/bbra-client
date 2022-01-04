import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../Shared/Header/Header';
import './ReadBook.css';


const ReadBook = () => {

    const { productId } = useParams();
    const [book, setBook] = useState({});

    useEffect( () => {
        fetch(`https://glacial-springs-00927.herokuapp.com/books/${productId}`)
        .then(res => res.json())
        .then(data => setBook(data));
    }, []);

   
    return (
        <div>
        <Header></Header>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 py-5">
                    <img src={book.img} className="w-75 text-center mt-5" height="350px" alt="" />
                    <h5 className="mt-3 text-black"><b>Book:</b> {book.name}</h5>
                    <h5 className="mt-3 text-black"><b>Published:</b> {book.publishing}</h5>
                    <h5 className="mt-3 text-black"><b>Author:</b> {book.author}</h5>
                </div>
                <div className="col-lg-6">
                    <div className="add-service">
                        <h2 className="brand-color fw-bold text-center mt-5 mb-3">{book.name}</h2>
                        <div className="full-book mb-5 pt-4">
                            <h2 className='text-center'>Page-01</h2>
                            <p>Some of the most important things to include are the banner image, the regular image, and the "person" relationship. If you want the large header photo at the top, include a banner image. This should be a large, high-quality, rectangular image. To include a photo in the middle of the article, use "image". This differs from square image and social media image as the square image will be used for thumbnails and on index pages, while the social media image will be used only when the article is shared on social media. The regular image is just an image you want featured in the article. Include an image caption to have a short description underneath the photo. Remember that the image description and image summary are different though, as image caption is a caption underneath the photo and image description should describe the image for those using screen readers. This means they don't need to be the same. The person relationship is also very important to include. Relating a person is what will fill in the author. But, if you fill in the author text field, that will also populate that category. Note that once you relate a person, that relationship will override and cancel out anything you wrote in author text. Other important relationships are series, organization, publication, and article. Relating a series will populate the "Related Series" section. Relating a organization will populate the blank field. Relating an article will populate the "Related Articles" section of the page. Relating the article to a publication will fill in the "Featured In" section. To fill in "For More Information", relate an organization. To fill in "Related Topic Areas", relate a dataset. Some of the most important things to include are the banner image, the regular image, and the "person" relationship. If you want the large header photo at the top, include a banner image. This should be a large, high-quality, rectangular image. To include a photo in the middle of the article, use "image". This differs from square image and social media image as the square image will be used for thumbnails and on index pages, while the social media image will be used only when the article is shared on social media. The regular image is just an image you want featured in the article. Include an image caption to have a short description underneath the photo. Remember that the image description and image summary are different though, as image caption is a caption underneath the photo and image description should describe the image for those using screen readers. This means they don't need to be the same. The person relationship is also very important to include. Relating a person is what will fill in the author. But, if you fill in the author text field, that will also populate that category. Note that once you relate a person, that relationship will override and cancel out anything you wrote in author text. Other important relationships are series, organization, publication, and article. Relating a series will populate the "Related Series" section. Relating a organization will populate the blank field. Relating an article will populate the "Related Articles" section of the page. Relating the article to a publication will fill in the "Featured In" section. To fill in "For More Information", relate an organization. To fill in "Related Topic Areas", relate a dataset.</p>

                            <h2 className='text-center'>Page-02</h2>
                            <p>Some of the most important things to include are the banner image, the regular image, and the "person" relationship. If you want the large header photo at the top, include a banner image. This should be a large, high-quality, rectangular image. To include a photo in the middle of the article, use "image". This differs from square image and social media image as the square image will be used for thumbnails and on index pages, while the social media image will be used only when the article is shared on social media. The regular image is just an image you want featured in the article. Include an image caption to have a short description underneath the photo. Remember that the image description and image summary are different though, as image caption is a caption underneath the photo and image description should describe the image for those using screen readers. This means they don't need to be the same. The person relationship is also very important to include. Relating a person is what will fill in the author. But, if you fill in the author text field, that will also populate that category. Note that once you relate a person, that relationship will override and cancel out anything you wrote in author text. Other important relationships are series, organization, publication, and article. Relating a series will populate the "Related Series" section. Relating a organization will populate the blank field. Relating an article will populate the "Related Articles" section of the page. Relating the article to a publication will fill in the "Featured In" section. To fill in "For More Information", relate an organization. To fill in "Related Topic Areas", relate a dataset. Some of the most important things to include are the banner image, the regular image, and the "person" relationship. If you want the large header photo at the top, include a banner image. This should be a large, high-quality, rectangular image. To include a photo in the middle of the article, use "image". This differs from square image and social media image as the square image will be used for thumbnails and on index pages, while the social media image will be used only when the article is shared on social media. The regular image is just an image you want featured in the article. Include an image caption to have a short description underneath the photo. Remember that the image description and image summary are different though, as image caption is a caption underneath the photo and image description should describe the image for those using screen readers. This means they don't need to be the same. The person relationship is also very important to include. Relating a person is what will fill in the author. But, if you fill in the author text field, that will also populate that category. Note that once you relate a person, that relationship will override and cancel out anything you wrote in author text. Other important relationships are series, organization, publication, and article. Relating a series will populate the "Related Series" section. Relating a organization will populate the blank field. Relating an article will populate the "Related Articles" section of the page. Relating the article to a publication will fill in the "Featured In" section. To fill in "For More Information", relate an organization. To fill in "Related Topic Areas", relate a dataset.</p>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReadBook;