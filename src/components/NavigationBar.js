import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';


function NavigationBar() {
    return (
        <div>
            <AppBar sx={{backgroundColor: 'black'}}>
                <Toolbar>
                    <Typography>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>LOGO</Link>
                    </Typography>
                    <Typography sx={{marginLeft: 'auto'}}>
                        <Link to='/about' style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                    </Typography>
                    <Typography sx={{margin: '20px'}}>
                        <Link to='/images' style={{ color: 'white', textDecoration: 'none' }}>Images</Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>

    )
}

export default NavigationBar;



 

