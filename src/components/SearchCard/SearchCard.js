import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Search from '@mui/icons-material/Search';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchCard.css';

export const SearchCard = () => {
    let navigate = useNavigate();
    const [inputValue, setInputValue] = React.useState('');
    const handleSubmit = (event) => {
        navigate(`/search/${inputValue}`);
        event.preventDefault();
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div className="cardContainer">
            <div className="headerText">
                <Typography variant="h3" noWrap component="div" color="white">
                    Stunning free images & royalty free stock
                </Typography>
                <Typography color="white">
                    Over 2.5 million+ high quality stock images
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Input
                        onChange={handleChange}
                        startAdornment={<Search onClick={handleSubmit} />}
                        className={'searchBar'}
                        placeholder="Search images, videos, and music"
                    />
                </form>
            </div>
            <img
                className="backgroundImage"
                alt="It's summer!"
                src="https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_960_720.jpg"
            />
        </div>
    );
};
