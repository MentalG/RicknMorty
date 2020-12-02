import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import { useSpring, animated } from 'react-spring/web.cjs';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgb(41, 41, 41)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px',
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
  const { episode } = post;
  const episodes = episode?.map((episode) => episode.slice(episode.indexOf('episode') + 8))

  const classes = useStyles();

  useEffect(() => {
    const fetching = async () => {
      const post = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      setPost(await post.json());
    };
    fetching();
  }, [id]);

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
            <img alt='alt' src={post?.image} className={'popup_image'} />
            <div className='popup_info_container'>
              <div className='popup_info_item'>
                  <Typography>{`id - ${post.id}`}</Typography>
              </div>
              <div className='popup_info_item'>
                  <Typography>{`Name - ${post.name}`}</Typography>
              </div>
              <div className='popup_info_item'>
                  <Typography>{`Status - ${post.status}`}</Typography>
              </div>
              <div className='popup_info_item'>
                  <Typography>{`Species - ${post.species}`}</Typography>
              </div>
              <div className='popup_info_item'>
                  <Typography>{`Type - ${post.type}`}</Typography>
              </div>
              <div className='popup_info_item'>
                  <Typography>{`Gender - ${post.gender}`}</Typography>
              </div>
              <div className='popup_info_item'>
                  <Typography>{`Origin - ${post.origin?.name}`}</Typography>
              </div>
              <div className='popup_info_item'>
                  <Typography>{`Count of episodes - ${episodes?.length}`}</Typography>
              </div>
              <div className='popup_info_item'>
                  <Typography>{`Created - ${post.created}`}</Typography>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PopUp;
