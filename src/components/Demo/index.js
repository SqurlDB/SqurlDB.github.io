import React from 'react';
import './demo.css'

const Demo = () => {

  const features = [
    {
      header: 'Generate Meaningful Dummy Data',
      info: 'Create dummy data from a wide variety of categories, applicable to many different sectors'
    },
    {
      header: 'Download Ready-to-Import SQL Files',
      info: "Download your dummy data as sql files, that can be easily imported into your database."
    },
    {
      header: 'Create 50MM+ Rows of Data at a Time',
      info: 'Create up to 50MM+ rows of data at any given time, giving you the ability to run database metrics dependent on scale.'
    },
    {
      header: 'Database Dashboard with Key KPIs',
      info: "Connect to your database and view key KPIs via the built in dashboard tab"
    },
    {
      header: 'Available across all major OS',
      info: 'Usable on Mac, Windows, and Linux based machines'
    },
  ]
  
  return(
    <div className="demo-container">
      <h1 className="feature-label"> Features </h1>
        <div className='feature-container'>
          {features.map((el,idx)=>(
            <div class= "features">
              <h3>{el.header}</h3>
              <p>{el.info}</p>
            </div>
          ))
          }
        </div>
    </div>
  )
}

export default Demo;