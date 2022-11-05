import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
     maxWidth: '100%',
     height: '100%',
  },
  media: {
    height: 10,
    paddingTop: '60.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));