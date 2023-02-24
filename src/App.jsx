import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";

function App() {
  return (
    <div>
      <Head />
    </div>
  );
}
export default App;

function Head() {
  const [cart, setCart] = useState(0);
  const items = [
    { img: "nike", itemname: "nike bag", price: 200 },
    { img: "adidas", itemname: "adidas bag", price: 150 },
    { img: "puma", itemname: "puma bag", price: 175 },
    { img: "disel", itemname: "disel bag", price: 180 },
    { img: "gucchi", itemname: "gucchi bag", price: 500 },
    { img: "wildcraft", itemname: "wildcraft bag", price: 100 },
    { img: "ducati", itemname: "ducati bag", price: 125 },
    { img: "marvel", itemname: "marvel bag", price: 225 },
  ];
  return (
    <div>
      <div className="nav">
        <div>
          <p>Start Bootstrap</p>
          <Button variant="text">Home</Button>
          <Button variant="text">About</Button>
          <Button variant="text">Shop</Button>
        </div>
        <div className="bcart">
          <Button
            variant="outlined"
            // startIcon={<ShoppingCartIcon />}
            startIcon={
              <Badge
                badgeContent={cart}
                color="primary"
                sx={{ margin: "0px 5px" }}
              >
                <ShoppingCartIcon />
              </Badge>
            }
          >
            Cart
          </Button>
        </div>
      </div>
      <div className="title">
        <h1>Shop in style</h1>
        <h6>with this homepage template</h6>
      </div>
      <Container fixed>
        <div className="list">
          {items.map((itms, index) => (
            <Items key={index} itms={itms} cart={cart} setCart={setCart} />
          ))}
        </div>
      </Container>
    </div>
  );
}

function Items({ itms, cart, setCart }) {
  return (
    <div className="card">
      <Card>
        <div className="item-img">
          <p>{itms.img}</p>
        </div>
        <div>
          <p>{itms.itemname}</p>
          <br />
          <p>⭐⭐⭐⭐⭐</p>
          <br />
          <p>${itms.price}.00</p>
          <br />
          <Buttons cart={cart} setCart={setCart} />
        </div>
      </Card>
    </div>
  );
}

function Buttons({ cart, setCart }) {
  const [show, setShow] = useState(true);
  const [btn, setBtn] = useState(false);
  return (
    <div>
      {show ? (
        <Button
          className="bitem"
          sx={{ margin: "10px 10px" }}
          size="small"
          variant="outlined"
          onClick={() => (setCart(cart + 1), setBtn(!btn), setShow(!show))}
          disabled={btn}
        >
          Add to cart
        </Button>
      ) : (
        <Button
          className="bitem"
          sx={{ margin: "10px 10px" }}
          size="small"
          variant="outlined"
          onClick={() => (setCart(cart - 1), setBtn(!btn), setShow(!show))}
          disabled={!btn}
        >
          Remove from cart
        </Button>
      )}
    </div>
  );
}
