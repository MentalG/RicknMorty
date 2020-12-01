import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const PopUp = (props) => {
  const { id, isOpen, setIsOpen } = props;
  const [post, setPost] = useState({});
  const titles = post ? Object.keys(post) : null;

  const classes = useStyles();
  
  useEffect(() => {
    const fetching = async () => {
        const post = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

        setPost(await post.json())
    }
    fetching();
  }, [id])

  return (
    <div>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <img alt='alt' src={post?.image} />
                {titles.map(title => <div>{title}</div>) }
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PopUp;
