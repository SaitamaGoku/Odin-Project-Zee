import "./App.css";
import Top from "./Top/Top";
import NavBar from "./NavBar/NavBar";
import TopContent from "./Top/TopContent";
import Info from "./Info/Info";
import BoxWrapper from "./Box/BoxWrapper";
import Box from "./Box/Box";
import QuoteWrapper from "./Quote/QuoteWrapper";
import Quote from "./Quote/Quote";
import CardWrapper from "./Card/CardWrapper";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";

function App() {
  let quote=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
  asperiores corporis perferendis voluptatem, inventore harum nihil
  recusandae aliquam ut id deserunt itaque consequatur eum ipsa quas?
  Enim, voluptatem tempora? Rem.`;
  let quoteBy=`Shakespeare, Writer`;
  
  let boxes=[]
  for(let i=1; i<=4; i++){
    boxes.push(<Box subtext={`Some Text ${i}`}></Box>)
  } 

  return (
    <>
      <Top>
        <NavBar></NavBar>
        <TopContent></TopContent>
      </Top>
      <Info>
        <p style={{ fontWeight: 800, fontSize: 36, color: "#1f2937" }}>
          Some Random Info
        </p>
        <BoxWrapper>
          {boxes}
        </BoxWrapper>
      </Info>
      <QuoteWrapper>
        <Quote quote={quote} by={quoteBy}></Quote>
      </QuoteWrapper>
      <CardWrapper>
        <Card></Card>
      </CardWrapper>
      <Footer>Copyright The Odin Project</Footer>
    </>
  );
}

export default App;
