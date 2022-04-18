import './App.css';
import CustomAppBar from './components/AppBar/AppBar';
import ImageList from '@mui/material/ImageList';
import * as React from 'react';
import { homePageData } from './constants/HomePageData';
import ImageListItem from '@mui/material/ImageListItem';
import { SearchCard } from './components/SearchCard/SearchCard';
const App = () => {
    return (
        <div className="page">
            <CustomAppBar />
            <SearchCard />
            <ImageList className="imageList" cols={5}>
                {homePageData.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            src={`${item.webformatURL}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default App;
