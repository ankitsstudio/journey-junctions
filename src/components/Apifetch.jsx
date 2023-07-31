import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Apifetch = () => {
    const [pic, setPic] = useState([]);

  useEffect(() => {
    const fetchPic = async () => {
      
      const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: {
          q: 'taylor swift',
          pageNumber: '1',
          pageSize: '10',
          autoCorrect: 'true',
          fromPublishedDate: 'null',
          toPublishedDate: 'null'
        },
        headers: {
          'X-RapidAPI-Key': 'fd7d8a3c91msh82d01916646d720p1ace64jsn170988850296',
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);

        const formattedDestinations = response.data.value.map(item => ({
          imageUrl: item.image.url,
        }));

        console.log(formattedDestinations);
        setPic(formattedDestinations);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPic();
  }, []);
  return (
    <div>
      <h1>Popular Destinations</h1>
      <p>Tours Gives You the Opportunity to see a lot, within a time frame</p>
      <ul>
        {pic.map(pic => (
          <li key={pic.id}>
            <img src={pic.imageUrl} alt={pic.heading} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Apifetch
