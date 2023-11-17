//styles
import styles from "./ContainerSale.module.css";

//assets4DATA
import dodge from "../../assets/dodge.png";
import audiR from "../../assets/audi-red.png";
import audiG from "../../assets/audi-grey.png";
import range from "../../assets/range.png";

//components
import { Card } from "../Card";


//assets4Brand
import audi from '../../assets/brands/audiii 1.png'
import ferrari from '../../assets/brands/ferrarii 1.png'
import mercedes from '../../assets/brands/mercedes.png'
import tesla from '../../assets/brands/tesla 1.png'
import { Brands } from "../Brand";

const DUMMY_DATA = [
  {
    id: "ep1",
    nameCar: "Dodge Changer",
    img: dodge ,
    year: 2016,
    mileage: "15k",
    pauseCircle: "auto",
    gas: "auto",
    price: 10000,
    offer: "Rent",
  },
  {
    id: "ep2",
    nameCar: "Audi RS7",
    img:  audiR ,
    year: 2016,
    mileage: "15k",
    pauseCircle: "auto",
    gas: "auto",
    price: 60000,
    offer: "Buy",
  },
  {
    id: "ep3",
    nameCar: "Audi RS7",
    img: audiG ,
    year: 2016,
    mileage: "15k",
    pauseCircle: "auto",
    gas: "auto",
    price: 15000,
    offer: "Rent",
  },
  {
    id: "ep4",
    nameCar: "Range Rover",
    img: range ,
    year: 2020,
    mileage: "15k",
    pauseCircle: "auto",
    gas: "auto",
    price: 65000,
    offer: "Buy",
  },
];

const DUMMY_DATA_BRANDS=[
  {id:'br1',name:'Audi',img: audi,},
  {id:'br2',name:'Ferrari',img:ferrari,},
  {id:'br3',name:'Mercedes',img: mercedes,},
  {id:'br4',name:'Tesla',img:tesla,},
]
export const ContainerSale = () => {
  return (
    <div className={styles["container-sale"]}>
      <h1>we have everything you need</h1>
      <div className={styles["container-sale-card"]}>
      {DUMMY_DATA.map((props)=>{
        return <Card {...props} key={props.id}/>
      })}
      </div>

      
      <div className={styles['container-sale-brands']}>
      <h1>Our Luxury Brand</h1>
      <div className={styles['brands']}>
      {DUMMY_DATA_BRANDS.map((props)=>{
        return(<Brands {...props} key={props.id}/>
        )
      })}
      </div>
        <h4>See The Store</h4>
      </div>
    </div>
  );
};
