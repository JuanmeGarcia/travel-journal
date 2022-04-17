import React from 'react'

function Card({data}) {
    console.log(data)

    return (
		<article className="card-container">
			<figure className="picture-container">
				<img src={data[0].imageUrl} alt="" />
			</figure>
			<div className='place-info'>
				<div className="location-info">
					<p>
						<span className="icon-container maps"></span>
						<p className="location-info__country">{data[0].location}</p>
                        <a href={data[0].googleMapsUrl}>
						<span className="location-info__maps">
							View on Google Maps
						</span>
                        </a>
					</p>
					<h1 className="location-info__place">{data[0].title}</h1>
				</div>
				<div className='more-info'>
					<p className="stayed-time"> {data[0].startDate} - {data[0].endDate}</p>
					<p className="location-description">
                        {data[0].description}
					</p>
				</div>
			</div>
		</article>
	)
}

export default Card