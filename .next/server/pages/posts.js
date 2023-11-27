"use strict";
(() => {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    // uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
    uri: `${'https://bestfeed.us'}/graphql`,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});


/***/ }),

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Posts),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Footer.js

function Footer() {
    return(/*#__PURE__*/ _jsx("footer", {
        children: /*#__PURE__*/ _jsx("a", {
            href: "https://developers.wpengine.com",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Part of the WP Engine Headless Developers Road Map 🗺️"
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/PostCard.js


function PostCard({ post  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/posts/${post.uri}`,
                className: "card",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "postCardTitle",
                    children: post.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "postCardContent",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Panthers are viewed as perhaps the mоst grоunded сreature in nature. These superb felines сan сatсh their prey withоut any help and guarantee that different сreatures dоn’t get tо grab …",
                        " "
                    ]
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__(29);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(114);
;// CONCATENATED MODULE: external "react-js-pagination"
const external_react_js_pagination_namespaceObject = require("react-js-pagination");
var external_react_js_pagination_default = /*#__PURE__*/__webpack_require__.n(external_react_js_pagination_namespaceObject);
;// CONCATENATED MODULE: ./pages/posts.js







function Posts({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Headless WP Next Starter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "layout_container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            className: "header",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "All Posts"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            className: "section",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "sectionTitle",
                                        children: "Posts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "archivePosts",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "postCard",
                                                children: posts.map((post)=>{
                                                    return(/*#__PURE__*/ jsx_runtime_.jsx(PostCard, {
                                                        post: post
                                                    }, post.uri));
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_js_pagination_default()), {
                                            // activePage={currentPage}
                                            // itemsCountPerPage={resultPerPage}
                                            // totalItemsCount={productsCount}
                                            activeLinkClass: "styles.pp_active_link",
                                            itemsCountPerPage: 10,
                                            totalItemsCount: 450,
                                            pageRangeDisplayed: 5,
                                            activeClass: "pagination_activeClass",
                                            itemClass: "pagination_itemClass",
                                            itemClassPrev: "pagination_itemClassPrev",
                                            itemClassNext: "pagination_itemClassNext",
                                            prevPageText: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        stroke: "currentColor",
                                                        fill: "currentColor",
                                                        strokeWidth: "0",
                                                        viewBox: "0 0 24 24",
                                                        height: "1em",
                                                        width: "1em",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                            fill: "none",
                                                            stroke: "#000",
                                                            strokeWidth: "2",
                                                            points: "7 2 17 12 7 22",
                                                            transform: "matrix(-1 0 0 1 24 0)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: " Previous"
                                                    })
                                                ]
                                            }),
                                            nextPageText: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Next "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        stroke: "currentColor",
                                                        fill: "currentColor",
                                                        strokeWidth: "0",
                                                        viewBox: "0 0 24 24",
                                                        height: "1em",
                                                        width: "1em",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                            fill: "none",
                                                            stroke: "#000",
                                                            strokeWidth: "2",
                                                            points: "7 2 17 12 7 22"
                                                        })
                                                    })
                                                ]
                                            }),
                                            hideFirstLastPages: true
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
async function getStaticProps() {
    var ref, ref1;
    // Format your GraphQL query using backticks `` and prepend gql
    const GET_POSTS = client_.gql`
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
    const response = await apollo/* client.query */.L.query({
        query: GET_POSTS
    });
    // Once we get the response back, we need to traverse it to pull out the
    // data we want to pass into the HomePage
    const posts = response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : (ref1 = ref.posts) === null || ref1 === void 0 ? void 0 : ref1.nodes;
    // const posts = await getAllPosts()
    return {
        props: {
            posts
        }
    };
}


/***/ }),

/***/ 114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664], () => (__webpack_exec__(661)));
module.exports = __webpack_exports__;

})();