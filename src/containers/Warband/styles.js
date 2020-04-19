import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => {
  return {
    h5: {
      margin: 0,
      ...theme.typography.h5,
    },
    addHireButton: {
      maxHeight: '40px',
      marginLeft: '12px',
    },
    menuPaper: {
      backgroundColor: 'white',
    },
    title: {
      lineHeight: '48px',
      position: 'absolute',
      top: 0,
      width: '100%',
      display: 'block',
      wordBreak: 'none',
      color: 'white',
    },
    header: {
      paddingTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
    textField: {
      marginTop: theme.spacing(3),
      display: 'flex',
    },
    menu: {
      backgroundColor: 'white',
    },
    viewContainer: {
      overflowY: 'scroll',
      overflowX: 'hidden',
      height: '100%',
      backgroundColor: theme.palette.background,
      // paddingLeft: '24px', // Only on desktop
      // paddingRight: '24px',
    },
    hero: {
      position: 'absolute',
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      color: 'white',
    },
    menuIcon: {
      position: 'absolute',
      top: 0,
      right: theme.spacing(2),
    },
    paper: {
      backgroundColor: 'white',
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    gridContainer: {
      margin: theme.spacing(3),
      width: 'calc(100% - 48px)',
    },
    divider: {
      marginTop: theme.spacing(4),
    },
    goldCrowns: {
      marginLeft: '24px',
    },
    startingExp: {
      marginLeft: '24px',
    },
    advancement: {
      ...theme.typography.body1,
      margin: 0,
      alignSelf: 'flex-end',
    },
    advancementRow: {
      marginTop: '24px',
      display: 'flex',
      flexDirection: 'row',
    },
    attributesContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '24px',
    },
    attributeColumn: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
    attributeHeader: {
      ...theme.typography.body2,
      margin: 0,
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'black',
    },
    attributeValue: {
      height: '25px',
      width: 'calc(100% - 1px)',
      textAlign: 'center',
      borderStyle: 'solid',
      borderWidth: '0.5px',
      fontSize: '22px',
    },
    checkBoxContainer: {
      display: 'block',
      position: 'relative',
      marginBottom: '12px',
      cursor: 'pointer',
      fontSize: '22px',
      userSelect: 'none',

      '& input': {
        /*  Hide the browser's default checkbox  */
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        height: 0,
        width: 0,
        /* Show the checkmark when checked */
        '&:checked': {
          '& ~ $checkmark': {
            /* When the checkbox is checked, add a blue background */
            '&:after': {
              display: 'block',
            },
          },
        },
      },

      /* On mouse-over, add a grey background color */
      '&:hover': {
        '& input': {
          '& ~ $checkmark': {
            backgroundColor: '#ccc',
          },
        },
      },
    },
    checkmark: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '25px',
      width: 'calc(100% - 2px)',
      borderStyle: 'solid',
      borderWidth: '1px',

      '&:after': {
        content: '"x"',
        position: 'absolute',
        display: 'none',
        width: '100%',
        textAlign: 'center',
      },

    },

  };
});