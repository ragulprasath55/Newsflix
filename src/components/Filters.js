import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { getNewsByKeywordAndFilter } from '../api'
import { NewsContext } from '../Context/NewsContext'

export default function Filters() {
  const { filter, setFilter, text, setNews, setError } = useContext(NewsContext)
  function onChange(value, toFilter) {
    setFilter({ ...filter, [toFilter]: value })
  }

  useEffect(async () => {
    const news = await getNewsByKeywordAndFilter(text, filter);
    if (news.length === 0) {
      setError('Oops! No result found, Try changing the filters or keywords')
    }
    setNews(news);
  }, [filter.Language, filter.Country, filter.Source]);

  return (
    <div>
      <label htmlFor="Country"></label>
      <Filter id="Country" lable="Country" onChange={(e) => onChange(e.target.value, 'Country')}>
        <option value="">Choose Country</option>
        <option value="us">US</option>
        <option value="au">AU</option>
        <option value="in">IN</option>
      </Filter>
      <label htmlFor="Language"></label>
      <Filter id="Language" lable="Language" onChange={(e) => onChange(e.target.value, 'Language')}>
        <option value="">Choose Language</option>
        <option value="en">EN</option>
        <option value="de">DE</option>
      </Filter>
      <label htmlFor="Source"></label>
      <Filter id="Source" lable="Source" onChange={(e) => onChange(e.target.value, 'Source')}>
        <option value="">Choose Source</option>
        <option value="cnn">CNN</option>
        <option value="bcc">BCC</option>
      </Filter>
    </div>
  )
}

const Filter = styled.select`
margin-right: 10px;
background-color: black;
color: white;
border:none;
`

