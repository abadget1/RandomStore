import { Button, Typography } from "@material-ui/core";
import useStyles from './styles';

const Banner = () => {
  const styles = useStyles();
  return (
    <div className={styles.empty}>
      <Typography variant='h5'>Your basket is start shopping for new products!</Typography>
      <Button variant='outlined' href="/">
        Shop
      </Button>
    </div> 
  );
};

export default Banner;
