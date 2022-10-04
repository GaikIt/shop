import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizza = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={467}
        viewBox="0 0 280 467"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >
        <circle cx="129" cy="128" r="125" />
        <rect x="51" y="274" rx="0" ry="0" width="155" height="12" />
        <rect x="0" y="308" rx="10" ry="10" width="280" height="81" />
        <rect x="125" y="417" rx="31" ry="31" width="151" height="48" />
        <rect x="0" y="431" rx="0" ry="0" width="85" height="27" />
    </ContentLoader>
)

export default SkeletonPizza;