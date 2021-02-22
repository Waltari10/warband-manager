import { makeStyles, Theme } from '@material-ui/core/styles';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default makeStyles((theme: Theme) => {
  return {
    navigationTitle: {
      marginTop: '16px',
      marginBottom: '8px',
    },
    h5: {
      margin: 0,
      ...theme.typography.h5,
    },
    h5Hire: {
      margin: 0,
      paddingTop: theme.spacing(3),
      ...theme.typography.h5,
    },
    hireFieldsColumn: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: '300px',
      [theme.breakpoints.down('xs')]: {
        minWidth: '200px',
      },
    },
    removeButton: {
      position: 'absolute',
      top: '16px',
      right: '0',
    },
    navigation: {
      padding: theme.spacing(3),
      width: '20%',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    navigationLink: {
      minHeight: '24px',
      lineHeight: '24px',
    },
    innerForm: {
      padding: theme.spacing(3),
      paddingTop: 0,
      maxWidth: '656px',
      backgroundColor: 'white',
      margin: '0 auto',
      [theme.breakpoints.down('xs')]: {
        maxWidth: 'none',
        borderRadius: 0,
      },
    },
    form: {
      overflowY: 'scroll',
      overflowX: 'hidden',
      padding: theme.spacing(3),
      flex: 1,
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    viewContainer: {
      height: 'calc(100% - 48px)',
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      flexDirection: 'row',
    },
    hireContainer: {
      position: 'relative',
    },
    addHireButton: {
      maxHeight: '40px',
      marginTop: theme.spacing(3),
    },
    menuPaper: {
      backgroundColor: 'white',
    },
    title: {
      lineHeight: '48px',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      display: 'block',
      wordBreak: 'none',
      color: 'white',
      whiteSpace: 'nowrap',
      marginLeft: '48px',
      marginRight: '48px',
      width: 'calc(100% - 96px)',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    header: {
      paddingTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
    numberField: {
      ['& input[type=number]::-webkit-inner-spin-button']: {
        opacity: 1,
      },
      ['& input[type=number]::-webkit-outer-spin-button']: {
        opacity: 1,
      },
    },
    textFieldShort: {
      ['& input[type=number]::-webkit-inner-spin-button']: {
        opacity: 1,
      },
      ['& input[type=number]::-webkit-outer-spin-button']: {
        opacity: 1,
      },
      maxWidth: theme.spacing(20),
      marginTop: theme.spacing(3),
      display: 'flex',
    },
    textFieldLong: {
      maxWidth: theme.spacing(40),
      marginTop: theme.spacing(3),
      display: 'flex',
    },
    textFieldArea: {
      maxWidth: theme.spacing(40),
      marginTop: theme.spacing(3),
      display: 'flex',
    },
    menu: {
      backgroundColor: 'white',
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
    whiteMenuIcon: {
      color: 'white',
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
      marginTop: theme.spacing(3),
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
      maxWidth: theme.spacing(40),
      marginTop: '24px',
      display: 'flex',
      flexDirection: 'row',
    },
    attributesContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '24px',
      maxWidth: '320px',
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
      overflow: 'hidden',
    },
    groupUl: {
      backgroundColor: 'white',
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
      backgroundColor: theme.palette.primary.main,
    },
    attributeValue: {
      height: '25px',
      width: 'calc(100% - 1px)',
      textAlign: 'center',
      borderStyle: 'solid',
      borderWidth: '0.5px',
      borderColor: theme.palette.primary.main,
      fontSize: '22px',
      ['&::-webkit-outer-spin-button']: {
        '-webkitAppearance': 'none',
      },
      ['&::-webkit-inner-spin-button']: {
        '-webkitAppearance': 'none',
      },
      '-moz-appearance': 'textfield',
    },
    checkBoxContainer: {
      display: 'block',
      position: 'relative',
      marginBottom: '12px',
      cursor: 'pointer',
      height: '25px',
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
