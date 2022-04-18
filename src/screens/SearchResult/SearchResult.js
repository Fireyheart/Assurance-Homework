import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Pagination from '@mui/material/Pagination';
import CustomAppBar from '../../components/AppBar/AppBar';
import Typography from '@mui/material/Typography';

import './SearchResult.css';

export default function SearchResultScreen() {
    let params = useParams();
    let [responseData, setResponseData] = useState(null);
    let [isLoading, setIsLoading] = useState(false);
    let [pageNumber, setPageNumber] = useState(1);
    let [totalHits, setTotalHits] = useState(100);

    useEffect(() => {
        loadMoreImages(1);
    }, []);

    const loadMoreImages = (page) => {
        setIsLoading(true);
        fetch(
            `https://pixabay.com/api/?key=13417145-d0c367819415b077de5e950e3&q=${params.searchValue}&image_type=photo&page=${page}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.hits);
                setIsLoading(false);
                setResponseData(data.hits);
                setTotalHits(data.totalHits);
            });
    };

    const handlePageChange = (event, page) => {
        setPageNumber(page);
        loadMoreImages(page);
    };

    const renderImageList = () => (
        <ImageList className={'imageList'} cols={5}>
            {responseData &&
                responseData.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            src={`${item.webformatURL}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar title={`@${item.user}`} />
                    </ImageListItem>
                ))}
        </ImageList>
    );

    return (
        <div className="page">
            <CustomAppBar searchValue={params.searchValue} />

            {!isLoading && responseData && responseData.length > 0 ? (
                <div className="page">
                    {renderImageList()}

                    <Pagination
                        count={totalHits / 20}
                        page={pageNumber}
                        onChange={handlePageChange}
                    />
                </div>
            ) : (
                <div>
                    <div className="headerText">
                        <Typography
                            variant="h3"
                            noWrap
                            component="div"
                            color="gray"
                        >
                            No results found
                        </Typography>
                        <Typography color="gray">
                            Try searching something else
                        </Typography>{' '}
                    </div>
                </div>
            )}

            <Backdrop open={isLoading && !responseData}>
                <CircularProgress />
            </Backdrop>
        </div>
    );
}
