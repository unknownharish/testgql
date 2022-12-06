import Head from 'next/head'
import { client } from '../../lib/apollo';
import { gql } from "@apollo/client";
import { useEffect } from 'react';


export default function SlugPage({ post }) {
  

useEffect(()=>{
  window.location.href = `https://edenultralounge.com/${post?.slug}`

},[])
  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.title} />
        <meta property="og:image" content={post?.featuredImage?.node?.sourceUrl} />
        <meta property="og:url" content={`https://edenultralounge.vercel.app/posts/${post?.slug}`} />
        <meta property="og:type" content="article" />
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      
      



      <div className="layout_container">
        <main>
          <header className="header">
            <div className="container">
              <figure className="">
                <div>
                  <img
                    width="100%"
                    height="auto"
                    src={post?.featuredImage?.node?.sourceUrl}
                    // sizes="(max-width: 300px) 100vw, 300px"
                  />
                </div>
              </figure>
              <h1 style={{marginTop: "150px"}}>
              {post?.title}
              </h1>
            </div>
          </header>
          <div className="content">
            <section className="section">
              <div className="container">
              <article dangerouslySetInnerHTML={{__html: post?.content}}/>
              </div>
            </section>
          </div>
          
        </main>
      </div>
    </div>
  )
}
const GET_POST = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        excerpt
        slug
        content
        uri
        featuredImage {
          node {
              sourceUrl
          }
      }
        date
        author {
          node {
            firstName
            lastName
          }
        }
      }
    }
  `

export async function getStaticProps({ params }){
  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  
  
  const response = await client.query({
      query: GET_POST,
      variables: {
        id: params.uri
      }
    })

  
    const post = response?.data?.post
    return {
      props: {
        post
      }
    }
  }

export async function getStaticPaths(){
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}
