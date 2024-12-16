/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "./components/herosec";
import Brand from "./components/brand";
import Ceramics from "./components/ceramic";
import Product from "./components/product";
import Benefit from "./components/benefit";
import Touch from "./components/intouch";
import ProductListing from "./productlisting/page";


export default function Home() {
  return (
   <>
   <Hero />
   <Brand />
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />
<ProductListing/>
   

   </>
  );
}
