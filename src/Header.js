import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  justify: {
      justifyContent: "center"
  },
  rootPaper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 700,
    justifyContent: "center"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.justify}>
            <Paper component="form" className={classes.rootPaper}>
                <InputBase
                    className={classes.input}
                    placeholder="Search MetaWeather"
                    inputProps={{ 'aria-label': 'search metaweather' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
