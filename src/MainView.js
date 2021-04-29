import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

  const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'location_type', label: 'Location Type', align: 'right', minWidth: 100 },
    {
      id: 'latt_long',
      label: 'Latt Long',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'woeid',
      label: 'Woeid',
      minWidth: 170,
      align: 'right',
    }
  ];

  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });

function MainView({search}) {

    const classes = useStyles();

    const [rows, setRows] = useState([]);

    useEffect(() => {

        loadResults(search);
    }, [search]);

    const loadResults = () => {
        fetch("https://www.metaweather.com/api/location/search/?query=" + search, {mode: "no-cors"})
            .then(res => res.json())
            .then((result) => {
                setRows(result);
            },
            (error) => {
                setRows([]);
            }
        )
    };

    return (
    <>
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map(row =>  {
                        return ( 
                        <TableRow key={row?.id}>
                            <TableCell align="right"  style={{cursor: "pointer"}}>{row?.title}</TableCell>
                            <TableCell align="right"  style={{cursor: "pointer"}}>{row?.location_type}</TableCell>
                            <TableCell align="right"  style={{cursor: "pointer"}}>{row?.woeid}</TableCell>
                            <TableCell align="right"  style={{cursor: "pointer"}}>{row?.latt_long}</TableCell>
                        </TableRow>);
                    })}
                </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </>
    );
}

export default MainView;
