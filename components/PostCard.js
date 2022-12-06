import Link from "next/link"

export default function PostCard ({ post }){
    return (
        <>
        <Link href={`/posts/${post.uri}`} className={"card"}>
        
                      <h3 className="postCardTitle">
                       {post.title}
                      </h3>
        </Link>
        <div className="postCardContent">
                      <p>
                        Panthers are viewed as perhaps the mоst grоunded
                        сreature in nature. These superb felines сan сatсh their
                        prey withоut any help and guarantee that different
                        сreatures dоn’t get tо grab …{" "}
                      </p>
                      </div>

                    
    </>
    )
}