import Head from "next/head";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import Pagination from "react-js-pagination";

export default function Posts({posts}) {
  return (
    <div className="container">
    <Head>
      <title>Headless WP Next Starter</title>
    
      <link rel="icon" href="favicon.ico"></link>
    </Head>
    <div className="layout_container">
    <main>
    <header className="header">
        <div className="container">
            <div className="container">
                <h1>All Posts</h1>
                {/* <p className="archiveDescription">Page 4</p> */}
            </div>
        </div>
        </header>


        <section className="section">
            <div className="container">
              <h2 className="sectionTitle">Posts</h2>
              <ul className="archivePosts">
                <li>
                  <div className="postCard">
                  {posts.map((post) => {
                     return <PostCard key={post.uri} post={post}></PostCard>;
                 })}
                    
                  </div>
                </li>
              </ul>
              <div>
                <Pagination
                  // activePage={currentPage}
                  // itemsCountPerPage={resultPerPage}
                  // totalItemsCount={productsCount}
                  
                  activeLinkClass={"styles.pp_active_link"}
                  itemsCountPerPage={10}
                  totalItemsCount={450}
                  pageRangeDisplayed={5}
                  activeClass={"pagination_activeClass"}
                  itemClass={"pagination_itemClass"}
                  itemClassPrev={"pagination_itemClassPrev"}
                  itemClassNext={"pagination_itemClassNext"}
                  prevPageText={
                    <>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          points="7 2 17 12 7 22"
                          transform="matrix(-1 0 0 1 24 0)"
                        ></polyline>
                      </svg>
                      <span> Previous</span>
                    </>
                  }
                  nextPageText={
                    <>
                    <span>Next </span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          points="7 2 17 12 7 22"
                        ></polyline>
                      </svg>
                      
                    </>
                  }
                  hideFirstLastPages={true}
                  // onChange={setCurrentPageNo}
                />
              </div>
            </div>
          </section>

    </main>
</div>
    
  </div>
  )
}


export async function getStaticProps() {
  // Format your GraphQL query using backticks `` and prepend gql
  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          content
          
          date
          uri
        }
      }
    }
  `;
  // Here we make a call with the client and pass in our query string to the
  // configuration objects 'query' property
  const response = await client.query({
    query: GET_POSTS,
  });
  // Once we get the response back, we need to traverse it to pull out the
  // data we want to pass into the HomePage

  const posts = response?.data?.posts?.nodes;

  // const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  };
}
