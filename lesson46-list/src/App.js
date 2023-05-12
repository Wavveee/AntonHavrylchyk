
import './App.css';

const newCustomers = [
  {
    name: "Eula ",
  },
  {
    name: "Sucrose",
  },
  {
    name: "Mona",
  },
  {
    name: "Jin",
  },
  {
    name: "Lisa",
  },
  {
    name: "Ganyu",
  },
  {
    name: "Farusan",
  },
]
const rewiews = [
  {
    name: "Ningguang",
    review: "cheaply",
  },
  {
    name: "Ei",
    review: "what am I doing here?",
  },
  {
    name: "Kokomi",
    review: "how to crit?",
  },
  {
    name: "Amber ",
    review: "good gliders",
  },
]
const orders = [
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "pending",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "pending",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "pending",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "pending",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "pending",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "",
  },
  {
    name: "Link",
    order: "Triforce",
    sum: "∞",
    status: "",
  },
]

const monthlyRevenue = Math.floor(Math.random() * 10000)

console.log(monthlyRevenue);

const LinckCard = (props) => {
  const { imageSrc, cardName, value, style } = props
  const className = `link-card ${style}`
  return (
    <a href='none' className={className} >
      <img src={imageSrc} className='link-card__img-size' alt=""></img>

      <div className='link-card__info'>
        <p className='link-card__info-name'>{cardName}</p>
        <p className='link-card__info-value'> {value} </p>
      </div>

    </a>
  )
}

const Baner = () => {
  return (
    <div className='main__baner'>
      <img src='./notfound.png' className='info__img' alt=""></img>

      <div className='main__baner__info'>
        <h2> Wellcome to react admin demo</h2 >
        <p>
          Never gonna give you up, never gonna let you down
          Never gonna run around and desert you
          Never gonna make you cry, never gonna say goodbye
          Never gonna tell a lie and hurt you
        </p>
      </div>
    </div>
  )
}

const pendingOrders = orders.filter(order =>
  order.status === "pending"
);

function Item({elem}) {
  if (elem.order) {
    return <p>Order: <span>{elem.order}</span></p>
  } else if (elem.review) {
    return <p>Review: <span>{elem.review}</span></p>
  }
  return null
}

const List = (props) => {
  const { array } = props

  const newList = array.map(elem =>
    <li className='list-item'>
      <img src='./notfound.png' alt={elem.name} className='list-item_photo' />

      <div className='list-item__info'>
        <p>Client name: <span>{elem.name}</span></p>
        <Item elem={elem} />
      </div>
    </li>
  )

  return (
    <ul className='list'>
      {newList}
    </ul>
  )
}

const ListContainer = (props) => {
  const {className, listName, array} = props

  return (
    <div className={className}>
      <h2>{listName}</h2>

      <List array={array}/>

    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className='header'>
        <div className='header__menu'> <img src='./burger-menu.svg' className='icon' alt="burger-menu"/> </div>

        <h1>Some Dashboard</h1>

        <div className='header__menu'><img src='./user-menu.svg' className='icon' alt="user-menu"/> </div>
      </header>

      <main className='main'>
        <div className='wrapper'>
          <div className='info'>
            <div className='info__card-container'>
              <LinckCard imageSrc='./notfound.png' cardName='Monthly Revenue' value={`${monthlyRevenue}$US`} />
              <LinckCard imageSrc='./notfound.png' cardName='New Orders' value={orders.length} />
            </div>

            <Baner />

            <ListContainer className="pendingOrders" listName="Pending Orders" array={pendingOrders} />
          </div>
          <div className='reviews'>
            <LinckCard imageSrc='./notfound.png' cardName='Rewiews' value={rewiews.length} />

            <ListContainer className="pendingOrders" listName="Reivews" array={rewiews} />
          </div>
          <div className='new-customers'>
            <LinckCard imageSrc='./notfound.png' cardName='New Customers' value={newCustomers.length} />

            <ListContainer className="pendingOrders" listName="New Customers" array={newCustomers} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
