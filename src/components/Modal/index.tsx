import React from 'react';
import { Transition } from 'react-transition-group';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BackIcon from '@material-ui/icons/ArrowLeft';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => {
  return {
    mainContainer: {
      height: '100%',
      position: 'relative',
      // backgroundColor: theme.palette.appBackground, // TODO: does this even exist?
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    backIcon: {
      zIndex: 2,
      position: 'absolute',
      left: theme.spacing(1),
      top: '-4px',
    },
    topNavigationContainer: {
      boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
      backgroundColor: theme.palette.primary.main,
      height: '48px',
      minHeight: '48px',
    },
    subtitle: {
      width: '100%',
      display: 'block',
      color: 'white !important',
      marginTop: '3px',
    },
    title: {
      color: 'white',
    },
    icon: {
      width: '18px',
      height: '22px',
      top: '5px',
      right: '43px',
      position: 'absolute',
      color: 'white',
    },
    backIconIcon: {
      color: 'white',
    },
  };
});

const duration = 300;

const defaultStyle = {
  transition: `left ${duration}ms ease-in-out`,
  left: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
};

const transitionStyles = {
  entering: { left: '0%' },
  entered: { left: '0%' },
  exiting: { left: '100%' },
  exited: { left: '100%' },
};

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
  subtitle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: any;
  renderContent?(): React.ReactNode;
  shouldClose?: boolean;
  className?: string;
}

const Modal: React.FunctionComponent<Props> = ({
  children, title, subtitle, Icon, renderContent, shouldClose, className,
}) => {

  const classes = useStyles();

  const [inProp, setInProp] = React.useState(false);
  const [shouldGoBack, setShouldGoBack] = React.useState(false);

  if (shouldClose && inProp) {
    setInProp(false);
    setTimeout(() => {
      setShouldGoBack(true);
    }, duration);
  }

  React.useEffect(() => {
    setInProp(true);
    return () => {
      setInProp(false);
      setShouldGoBack(false);
    };
  }, []);


  return (
    <>
      {shouldGoBack && <Redirect to={'/'} />}
      <Transition
        in={inProp}
        timeout={duration}
      >
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className={`${classes.mainContainer} ${className}`}
          >
            <div
              className={classes.topNavigationContainer}
            >
              <IconButton
                id="back_button"
                className={classes.backIcon}
                onClick={() => {
                  setInProp(false);
                  setTimeout(() => {
                    setShouldGoBack(true);
                  }, duration);
                }}
              >
                <BackIcon
                  className={classes.backIconIcon}
                  fontSize="large"
                />
              </IconButton>
              {typeof renderContent === 'function' ? renderContent() : null}
              {Icon && <Icon className={classes.icon} />}
              <Typography className={classes.title} align="center" variant="h6">
                {title}
              </Typography>
              <Typography align="center" className={classes.subtitle} variant="caption">
                {subtitle}
              </Typography>
            </div>
            {children}
          </div>
        )}
      </Transition>
    </>
  );
};

export default Modal;