import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.css';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 32,
      padding: '0 30px',
    },
  });

function CounterFeature(props) {

    const classes = useStyles();

    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const add = () => {
        const action = increase(); // action creator
        dispatch(action);
    }

    const minus = () => {
        const action = decrease(); // action creator
        dispatch(action);
    }

    return (
        <div className={styles.counter}>
            <h2>Counter Feature</h2>
            <h3>Number: {counter}</h3>
            <div>
                <Button className={classes.root} onClick={add}>Tăng</Button>
                <Button className={classes.root} onClick={minus}>Giảm</Button>
            </div>
        </div>
    );
}

export default CounterFeature;