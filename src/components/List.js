import location from '../Img/Fill 220.png'

export default function List(props) {
  return (
    <>
      <div className="list">
        <img className="list-img" src={props.item.imageUrl}/>
        <div className='list-container-info'>
          <div className='list-container-location'>
            <img src={location}/>
            <h3 className="list-location">{props.item.location}</h3>
            <a className="list-google_maps" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h1 className="list-title">{props.item.title}</h1>
          <div className="list-date">
            <p>{props.item.startDate} - </p>
            <p>{props.item.endDate}</p>
          </div>
          <p className="list-description">{props.item.description}</p>
        </div>
      </div>
      {props.line && <div className='list-line'></div>}
    </>
  )
}