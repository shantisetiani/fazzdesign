import React from 'react'
import Head from 'next/head'
import { string } from 'prop-types'

const defaultDescription = 'Site description'
const defaultOGURL = 'http://localhost:300'
const defaultOGImage = '/static/images/home-hero@2x.png'

const SiteMeta = props => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/images/payfazz-favicon.png" />
    <link rel="apple-touch-icon" href="/static/images/payfazz-favicon.png" />
    <link rel="mask-icon" href="/static/images/payfazz-favicon.png" color="#ffffff" />
    <link rel="icon" href="/static/images/payfazz-favicon.png" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500,700,900|Roboto:300,400,500" rel="stylesheet" />
    <link rel="stylesheet" href="/static/css/style.css" />
    <link rel="stylesheet" href="/static/css/icons.css" />
    <link rel="stylesheet" href="/static/css/fontello.css" />
  </Head>
)

SiteMeta.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default SiteMeta
