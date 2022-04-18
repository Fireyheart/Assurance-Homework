import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import UploadFile from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Input from '@mui/material/Input';
import Search from '@mui/icons-material/Search';
import './AppBar.css';
const pages = ['Photos', 'Illustrations', 'Vectors'];
const userAction = ['Explore', 'Log in', 'Join'];
const CustomAppBar = (props) => {
    let { searchValue } = props;

    let navigate = useNavigate();

    const [inputValue, setInputValue] = React.useState(searchValue);

    const handleClick = () => {
        alert('You clicked a button!');
    };

    const handleSubmit = (event) => {
        navigate(`/search/${inputValue}`);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleLogo = () => {
        navigate('/');
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        onClick={handleLogo}
                        className={'logoHeader'}
                        sx={{ mr: 2 }}
                    >
                        LOGO
                    </Typography>
                    <div className={'navigationButtonContainer'}>
                        {searchValue ? (
                            <form onSubmit={handleSubmit}>
                                <Input
                                    startAdornment={
                                        <Search onClick={handleSubmit} />
                                    }
                                    style={{
                                        backgroundColor: '#fff'
                                    }}
                                    onChange={handleChange}
                                    value={inputValue}
                                />
                            </form>
                        ) : (
                            <ButtonGroup>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleClick}
                                        className="button"
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        )}
                    </div>
                    <div className={'userButtonContainer'}>
                        <ButtonGroup>
                            {userAction.map((action) => (
                                <Button
                                    className="button"
                                    key={action}
                                    onClick={handleClick}
                                >
                                    {action}
                                </Button>
                            ))}
                        </ButtonGroup>
                        <Button
                            color="success"
                            variant="contained"
                            className="uploadButton"
                        >
                            <UploadFile className="uploadIcon" />
                            {'Upload'}
                        </Button>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default CustomAppBar;
