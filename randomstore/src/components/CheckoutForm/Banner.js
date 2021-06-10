import { Button } from "@material-ui/core";


const Banner = () => {
  return (
    <div className="basket-banner">
        <div>              
            Basket is empty press Shopping for adding new products</div>
            <Button href="/">
              Shop
            </Button>
    </div>
  );
};

export default Banner;
